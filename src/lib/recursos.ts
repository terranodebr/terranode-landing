import { getCollection, type CollectionEntry } from "astro:content";

export type Recurso = CollectionEntry<"recursos">;

// Same rule as src/lib/solucoes.ts: drafts render in dev and PR previews (which are
// noindex), and production builds skip them entirely.
const includeDrafts =
  import.meta.env.DEV || import.meta.env.BASE_URL.startsWith("/pr-preview");

/** Feature pages that this build should publish, in footer order. */
export async function getRecursos(): Promise<Recurso[]> {
  const entries = await getCollection("recursos", ({ data }) =>
    includeDrafts ? true : !data.draft,
  );
  return entries.sort((a, b) => a.data.ordem - b.data.ordem);
}

export interface RecursoEmBreve {
  nome: string;
  /** One line under the name in the menu. Only copy that already exists on the site. */
  chamada?: string;
  icone: "formulario" | "relatorio";
}

/**
 * Features listed in the Funcionalidades menu and footer before their page exists. They
 * render as "Em breve", with no link. Once a page with the same `recurso` name lands in
 * src/content/recursos/ and is published, the page wins and this entry stops showing;
 * delete it then.
 */
const emBreve: RecursoEmBreve[] = [
  { nome: "Formulários", chamada: "Arraste os campos ou descreva o levantamento para a IA.", icone: "formulario" },
  { nome: "Relatórios", icone: "relatorio" },
];

/** Upcoming features that don't have a published page in this build. */
export function getRecursosEmBreve(publicados: Recurso[]): RecursoEmBreve[] {
  const nomes = new Set(publicados.map((r) => r.data.recurso));
  return emBreve.filter((r) => !nomes.has(r.nome));
}
