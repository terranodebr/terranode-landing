/**
 * Resolve a path in public/ against the build's base path.
 *
 * Astro rewrites imported assets automatically, but raw string paths in markup are
 * left alone — which breaks PR previews, where the site is served from
 * /pr-preview/pr-N/ instead of /.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
