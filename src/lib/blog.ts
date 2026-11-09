import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { asset } from "./asset";
import { getRecursos } from "./recursos";
import { getSolucoes } from "./solucoes";
import { FUNDADORES, type Fundador } from "./time";

export type Artigo = CollectionEntry<"blog">;

// Same rule as src/lib/solucoes.ts: drafts render in dev and PR previews (which are
// noindex), and production builds skip them entirely.
const includeDrafts =
  import.meta.env.DEV || import.meta.env.BASE_URL.startsWith("/pr-preview");

/** Articles that this build should publish, newest first. */
export async function getArtigos(): Promise<Artigo[]> {
  const entries = await getCollection("blog", ({ data }) =>
    includeDrafts ? true : !data.draft,
  );
  return entries.sort((a, b) => b.data.publicadoEm.getTime() - a.data.publicadoEm.getTime());
}

export const categorias: Record<Artigo["data"]["categoria"], string> = {
  "how-tos": "How-tos",
  novidades: "Novidades",
  casos: "Casos",
  engenharia: "Engenharia",
};

export function autorDe(id: Artigo["data"]["autor"]): Fundador {
  const autor = FUNDADORES.find((f) => f.nome.toLowerCase().replace(/\s+/g, "-") === id);
  if (!autor) throw new Error(`Autor "${id}" não está em FUNDADORES (src/lib/time.ts).`);
  return autor;
}

// Frontmatter dates parse as midnight UTC, so they format in UTC too: in Brazil's time zone
// "2026-11-06" would print as the day before.
const formatoData = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" });
export const dataPorExtenso = (data: Date) => formatoData.format(data);

export function minutosDeLeitura(corpo = ""): number {
  return Math.max(1, Math.ceil(corpo.trim().split(/\s+/).length / 200));
}

/**
 * The sector and feature pages an article points at, leaving out any this build does not
 * publish, since a draft has no page in production. A name matching no file throws: Astro
 * only logs a bad reference() and lets the build pass, which would drop the link unnoticed.
 */
export async function paginasRelacionadas(artigo: Artigo): Promise<{ rotulo: string; href: string }[]> {
  for (const ref of [...artigo.data.setores, ...artigo.data.recursos]) {
    if (!(await getEntry(ref))) {
      throw new Error(`O artigo "${artigo.id}" aponta para "${ref.id}", que não existe em src/content/${ref.collection}/.`);
    }
  }
  const [solucoes, recursos] = await Promise.all([getSolucoes(), getRecursos()]);
  const setores = new Set(artigo.data.setores.map((r) => r.id));
  const funcoes = new Set(artigo.data.recursos.map((r) => r.id));
  return [
    ...recursos
      .filter((r) => funcoes.has(r.id))
      .map((r) => ({ rotulo: r.data.recurso, href: asset(`/recursos/${r.id}/`) })),
    ...solucoes
      .filter((s) => setores.has(s.id))
      .map((s) => ({ rotulo: s.data.setor, href: asset(`/solucoes/${s.id}/`) })),
  ];
}
