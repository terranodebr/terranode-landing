/** The waitlist form, where every CTA on the site leads. */
export const WAITLIST = "https://form.typeform.com/to/ZVQYTFV5";

/** The blog page a waitlist link sits on. The scheme is described in AGENTS.md. */
export interface OrigemBlog {
  /** "artigo" on an article page, "indice" on /blog/. */
  medium: "artigo" | "indice";
  /** The article slug, or "indice" on /blog/. */
  campaign: string;
}

/** Where on the page the link sits. */
export type PosicaoCta = "corpo" | "convite" | "fechamento" | "cabecalho" | "rodape";

/** The waitlist URL, tagged when the link is on a blog page and bare everywhere else. */
export function listaDeEspera(origem: OrigemBlog | undefined, content: PosicaoCta): string {
  if (!origem) return WAITLIST;
  const utm = new URLSearchParams({
    utm_source: "blog",
    utm_medium: origem.medium,
    utm_campaign: origem.campaign,
    utm_content: content,
  });
  return `${WAITLIST}?${utm}`;
}
