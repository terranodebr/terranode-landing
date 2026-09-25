// Renders scripts/og/og-default.html into public/og-default.jpg (1200×630), the image
// social networks show when a page is shared. Needs Playwright, which the site itself
// doesn't depend on: `npx -y -p playwright node scripts/og/gerar.mjs` works without
// installing it in the project.
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const fonte = new URL("./og-default.html", import.meta.url);
const destino = fileURLToPath(new URL("../../public/og-default.jpg", import.meta.url));

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1200, height: 630 } });
await pagina.goto(fonte.href, { waitUntil: "networkidle" });
await pagina.evaluate(() => document.fonts.ready);
await pagina.screenshot({ path: destino, type: "jpeg", quality: 88 });
await navegador.close();
console.log(`Gerado ${destino}`);
