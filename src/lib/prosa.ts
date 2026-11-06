import { asset } from "./asset";

/**
 * Markdown bodies write their links root-relative ("/recursos/catalogos/"). They get the
 * base path here, as asset() does in markup, so they also work in PR previews. Links to
 * other sites open in a new tab.
 */
export function ajustarLinks(html: string): string {
  return html
    .replace(/href="\/(?!\/)/g, `href="${asset("/")}`)
    .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener"');
}
