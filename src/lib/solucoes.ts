import { getCollection, type CollectionEntry } from "astro:content";

export type Solucao = CollectionEntry<"solucoes">;

/**
 * Draft pages are placeholders waiting on copy. They render in `astro dev` and in
 * PR previews so the team can review them, but production builds skip them: a page
 * reading "[Dor 1 — a preencher]" must never be reachable or end up in the sitemap.
 *
 * PR previews are already noindex (see Base.astro), so including drafts there is safe.
 */
// BASE_URL is always defined by Astro; PR previews build with base=/pr-preview/pr-N.
// Same check Base.astro uses to decide noindex, so the two can't drift apart.
const includeDrafts =
  import.meta.env.DEV || import.meta.env.BASE_URL.startsWith("/pr-preview");

/** Sector pages that this build should publish, in index order. */
export async function getSolucoes(): Promise<Solucao[]> {
  const entries = await getCollection("solucoes", ({ data }) =>
    includeDrafts ? true : !data.draft,
  );
  return entries.sort((a, b) => a.data.ordem - b.data.ordem);
}
