import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Astro 7 has no implicit "directory under src/content = collection" behaviour;
// a collection exists only once it is declared here with a loader.
// Only `solucoes` is declared for now — blog/, ajuda/ and comparativos/ are still
// empty, and a glob over an empty directory only produces warnings.

// Every field the page renders lives in frontmatter so that Pages CMS can present
// it as a form field. The markdown body carries prose only.
const solucoes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/solucoes" }),
  schema: z.object({
    /** <title> and og:title. Written for search, not for the H1. */
    title: z.string(),
    /** <meta name="description">. */
    description: z.string(),
    /** Sector label, matching the tag used in the home page carousel. */
    setor: z.string(),
    /** Page H1. Written for the reader. */
    h1: z.string(),
    /** Hero paragraph under the H1. */
    subtitulo: z.string(),
    /** Position in the /solucoes/ index, ascending. */
    ordem: z.number(),
    /**
     * Drafts are skipped by production builds entirely — see src/lib/solucoes.ts.
     * Defaults to true so a new page can never reach production by omission.
     */
    draft: z.boolean().default(true),
    /** Path under public/, or an absolute URL. Falls back to the site default. */
    image: z.string().optional(),

    dores: z
      .array(
        z.object({
          titulo: z.string(),
          texto: z.string(),
        }),
      )
      .min(1),

    passos: z
      .array(
        z.object({
          label: z.string(),
          titulo: z.string(),
          texto: z.string(),
        }),
      )
      .min(1),

    /** Typical form fields for the sector, rendered as chips. */
    campos: z.array(z.string()).min(1),

    /** Shape mirrors FaqItem in src/components/Faq.astro so it passes straight through. */
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
          badge: z.string().optional(),
        }),
      )
      .min(1),
  }),
});

export const collections = { solucoes };
