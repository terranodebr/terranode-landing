import { getCollection, type CollectionEntry } from "astro:content";

export type Comparativo = CollectionEntry<"comparativos">;

// Same rule as src/lib/solucoes.ts: drafts render in dev and PR previews (which are
// noindex), and production builds skip them entirely.
const includeDrafts =
  import.meta.env.DEV || import.meta.env.BASE_URL.startsWith("/pr-preview");

/** Comparison pages that this build should publish, in index order. */
export async function getComparativos(): Promise<Comparativo[]> {
  const entries = await getCollection("comparativos", ({ data }) =>
    includeDrafts ? true : !data.draft,
  );
  return entries.sort((a, b) => a.data.ordem - b.data.ordem);
}
