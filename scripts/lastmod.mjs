// Last-modified dates for the sitemap, taken from git history.
//
// Each URL maps to the source files that shape its content. The sitemap's <lastmod> is the
// date of the most recent commit touching any of them, so Google sees a page as changed
// only when its content actually changed, not on every deploy.
//
// A wrong lastmod is worse than none (Google learns to ignore the field for the whole
// site), so when git history is unavailable — no git, or a shallow clone where every file
// would report the same single commit — this returns undefined and the sitemap simply
// leaves the field out. deploy.yml checks out with fetch-depth: 0 for this reason.

import { execFileSync } from "node:child_process";

function git(args) {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

const historyAvailable = git(["rev-parse", "--is-shallow-repository"]) === "false";

/** Source files behind a page, by URL path. Shared layouts count: they change what the page shows. */
function sourcesFor(pathname) {
  const p = pathname.replace(/\/+$/, "/");
  if (p === "/") return ["src/pages/index.astro", "src/components/home", "src/components/Faq.astro"];
  if (p === "/sobre/") return ["src/pages/sobre.astro", "src/lib/time.ts", "src/lib/empresa.ts"];
  if (p === "/solucoes/") return ["src/pages/solucoes/index.astro", "src/content/solucoes"];

  const m = p.match(/^\/(solucoes|recursos|comparativos)\/([^/]+)\/$/);
  if (m) {
    const [, colecao, slug] = m;
    const layout = { solucoes: "Solucao", recursos: "Recurso", comparativos: "Comparativo" }[colecao];
    const extra = colecao === "recursos" ? ["src/components/recursos"] : [];
    return [`src/content/${colecao}/${slug}.md`, `src/layouts/${layout}.astro`, ...extra];
  }
  return [];
}

const cache = new Map();

/** ISO date of the last commit touching the page's sources, or undefined. */
export function lastmodFor(url) {
  if (!historyAvailable) return undefined;
  const pathname = new URL(url).pathname;
  if (cache.has(pathname)) return cache.get(pathname);

  const sources = sourcesFor(pathname);
  const date = sources.length ? git(["log", "-1", "--format=%cI", "--", ...sources]) : "";
  const value = date || undefined;
  cache.set(pathname, value);
  return value;
}
