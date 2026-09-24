// The flow comparison shared by both comparison layouts (FluxoComparado.astro in v1,
// ComparativoV2.astro in v2): the TerraNode side, which is the same on every page, and
// the line icons both sides pick from.

export type Icone =
  | "navegador" | "desktop" | "app" | "nuvem" | "planilha"
  | "painel" | "exportar" | "config" | "servidor" | "revisao";

export interface Passo { icone: Icone; titulo: string; detalhe: string }

export const passosTerranode: (Passo & { volta?: string })[] = [
  { icone: "navegador", titulo: "Monte o formulário no navegador", detalhe: "Arraste os campos ou descreva o levantamento para a IA." },
  { icone: "app", titulo: "Colete offline no app", detalhe: "iOS ou Android, com ±3 cm usando GNSS externo." },
  { icone: "revisao", titulo: "Revise ponto a ponto", detalhe: "Valide com um clique ou rejeite com um comentário.", volta: "O ponto rejeitado volta ao coletor" },
  { icone: "exportar", titulo: "Exporte só o dado validado", detalhe: "CSV, GeoJSON ou Shapefile." },
];

// 24×24 stroke icons, drawn to match the line weight of the site's other icons.
const paths: Record<Icone, string> = {
  navegador: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6" cy="6.5" r=".6"/><circle cx="8.5" cy="6.5" r=".6"/>',
  desktop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  app: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  nuvem: '<path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/><path d="M12 11v5M9.5 13.5 12 11l2.5 2.5"/>',
  planilha: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14.5h18M9 4v16"/>',
  painel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  exportar: '<path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
  config: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  servidor: '<ellipse cx="12" cy="5.5" rx="8" ry="2.5"/><path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>',
  revisao: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16.5 9.5"/>',
};

export const icone = (name: Icone) =>
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
