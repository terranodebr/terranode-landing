// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodFor } from './scripts/lastmod.mjs';

// PR previews are published under a subpath of the production domain
// (terranode.com.br/pr-preview/pr-N/), so the build needs a matching base.
const base = process.env.PREVIEW_BASE || undefined;

export default defineConfig({
  site: 'https://terranode.com.br',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // <lastmod> from git history, per page. See scripts/lastmod.mjs.
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  // The home redesign was reviewed at /v2/ before it replaced /. Links to it still land.
  redirects: {
    '/v2': '/',
    // Energia e telecom became two pages; the old URL was already indexed.
    '/solucoes/energia-e-telecom': '/solucoes/energia/',
  },
  vite: {
    // Pre-bundle GSAP and ScrollTrigger together at dev-server start. Discovered one at a
    // time, they can land in separate optimize passes and load two copies of the GSAP
    // core, which breaks every ScrollTrigger on the page ("reading 'end'").
    optimizeDeps: { include: ["gsap", "gsap/ScrollTrigger"] },
  },
});
