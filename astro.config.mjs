// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PR previews are published under a subpath of the production domain
// (terranode.com.br/pr-preview/pr-N/), so the build needs a matching base.
const base = process.env.PREVIEW_BASE || undefined;

export default defineConfig({
  site: 'https://terranode.com.br',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
