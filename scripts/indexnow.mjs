// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing also feeds ChatGPT and
// Copilot search) which pages changed in this deploy, so they recrawl them within hours
// instead of whenever they next get to the sitemap. Google does not take part in IndexNow.
//
// Run by deploy.yml in two steps:
//   node scripts/indexnow.mjs snapshot          before publishing: saves the live sitemap
//   node scripts/indexnow.mjs submit [--todas]  after publishing: submits what changed
//
// Add --simular to submit to list the URLs it would send, without waiting or sending.
//
// "Changed" means a URL that is new in the sitemap or whose <lastmod> moved, compared with
// the sitemap that was live before this deploy. Resubmitting unchanged pages on every
// deploy is what IndexNow asks sites not to do. --todas submits every URL, for a first run
// or to recover from a failed submission.
//
// The key is public by design: the engines confirm ownership by fetching
// https://terranode.com.br/<key>.txt and checking that it contains the key.
//
// Nothing here can fail the deploy. The site is already published by the time this runs,
// and a missed notification only means the engines find the change on their own later.

import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SITE = "https://terranode.com.br";
const KEY = "2b8b77fadf750c577466d2325a7726e2";
const SITEMAP_PATH = "/sitemap-0.xml";
const SNAPSHOT = ".indexnow-sitemap-anterior.xml";
const ENDPOINT = "https://api.indexnow.org/indexnow";
// Every request has a deadline: the snapshot step runs before publishing, so a stalled
// connection there would hold up the deploy itself.
const TIMEOUT_SITE_MS = 15_000;
const TIMEOUT_INDEXNOW_MS = 30_000;

const log = (msg) => console.log(`[indexnow] ${msg}`);
// "::warning::" must start the line for GitHub Actions to show it as an annotation.
const warn = (msg) => console.log(`::warning title=IndexNow::${msg}`);

/** Undoes XML escaping, so a URL with "&amp;" in the sitemap is sent as "&". */
function unescapeXml(texto) {
  return texto
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&"); // last, so "&amp;lt;" becomes "&lt;" and not "<"
}

/** Map of URL -> lastmod ("" when absent) from sitemap XML. */
function parse(xml) {
  const urls = new Map();
  for (const [, bloco] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = bloco.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;
    const lastmod = bloco.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
    urls.set(unescapeXml(loc), unescapeXml(lastmod));
  }
  return urls;
}

async function fetchLive() {
  // Cache-busting query: GitHub Pages sits behind a CDN.
  const res = await fetch(`${SITE}${SITEMAP_PATH}?t=${Date.now()}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(TIMEOUT_SITE_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function snapshot() {
  try {
    writeFileSync(SNAPSHOT, await fetchLive());
    log("sitemap publicado antes do deploy salvo");
  } catch (e) {
    // No previous sitemap (first deploy, or the site was down): every URL counts as new.
    writeFileSync(SNAPSHOT, "");
    log(`sem sitemap anterior (${e.message}); todas as URLs contam como novas`);
  }
}

async function submit(todas, simular) {
  const novo = readFileSync(`dist${SITEMAP_PATH}`, "utf8");
  const atual = parse(novo);

  let urls;
  if (todas) {
    urls = [...atual.keys()];
  } else {
    const anterior = parse(existsSync(SNAPSHOT) ? readFileSync(SNAPSHOT, "utf8") : "");
    urls = [...atual].filter(([loc, lastmod]) => anterior.get(loc) !== lastmod).map(([loc]) => loc);
  }

  if (urls.length === 0) {
    log("nenhuma página mudou; nada a enviar");
    return;
  }
  if (simular) {
    log(`simulação, enviaria ${urls.length} URL(s):\n  ${urls.join("\n  ")}`);
    return;
  }

  // GitHub Pages takes a minute or two to serve a push to gh-pages. Engines may fetch the
  // pages as soon as they are notified, so wait until the new sitemap is live (up to ~5 min).
  for (let i = 0; i < 20; i++) {
    try {
      if ((await fetchLive()) === novo) break;
    } catch {}
    if (i === 19) log("o site ainda não mostra o sitemap novo; enviando mesmo assim");
    else await sleep(15_000);
  }

  log(`enviando ${urls.length} URL(s):\n  ${urls.join("\n  ")}`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls,
    }),
    signal: AbortSignal.timeout(TIMEOUT_INDEXNOW_MS),
  });
  // 200 = accepted; 202 = accepted, key still being validated (normal on the first run).
  if (res.status === 200 || res.status === 202) log(`aceito (HTTP ${res.status})`);
  else warn(`IndexNow respondeu HTTP ${res.status}: ${await res.text()}`);
}

const [cmd, ...args] = process.argv.slice(2);
try {
  if (cmd === "snapshot") await snapshot();
  else if (cmd === "submit") await submit(args.includes("--todas"), args.includes("--simular"));
  else log("uso: node scripts/indexnow.mjs snapshot | submit [--todas] [--simular]");
} catch (e) {
  warn(`falhou: ${e.message}`);
}
