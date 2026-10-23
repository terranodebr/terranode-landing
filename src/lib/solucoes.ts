import { getCollection, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";
import setorEnergia from "../assets/setor-energia.webp";
import setorTelecom from "../assets/setor-telecom.webp";
import setorExploracao from "../assets/setor-exploracao-mineral.webp";
import setorMineracao from "../assets/setor-mineracao.webp";
import setorTopografia from "../assets/setor-topografia.webp";
import setorMeioAmbiente from "../assets/setor-meio-ambiente.webp";
import setorMunicipios from "../assets/setor-municipios.webp";
import setorAgro from "../assets/setor-agro.webp";
import setorSaneamento from "../assets/setor-saneamento.webp";

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

/**
 * Each sector's photo, generated in Higgsfield so the sector pages don't repeat the
 * home page's use-case photos. Behind the hero stage on the sector page, and on the
 * sector's card in the /solucoes/ index. A sector missing here gets neither.
 */
export const fotosSetor: Record<string, ImageMetadata> = {
  energia: setorEnergia,
  telecom: setorTelecom,
  "topografia-e-cadastro": setorTopografia,
  "meio-ambiente": setorMeioAmbiente,
  municipios: setorMunicipios,
  agro: setorAgro,
  "saneamento-e-obras": setorSaneamento,
  "exploracao-mineral": setorExploracao,
  mineracao: setorMineracao,
};

/** Alt text for each photo in fotosSetor. Describes what the photo shows, not the sector. */
export const altSetor: Record<string, string> = {
  energia: "Linha de transmissão cruzando morros verdes, com inspetor de colete laranja junto à base de uma torre e caminhonete na estrada de terra",
  telecom: "Torre de telecomunicações no alto de um morro, com técnico e caminhonete ao lado",
  "topografia-e-cadastro": "Topógrafo com colete refletivo e bastão GNSS ao lado de um marco de divisa em área rural",
  "meio-ambiente": "Técnica ambiental coletando amostra de água em um rio de mata",
  municipios: "Agente municipal com tablet em frente às casas de uma rua residencial",
  agro: "Agrônomo registrando dados no celular em meio a uma lavoura de café",
  "saneamento-e-obras": "Fiscal de obra com tablet ao lado de vala com tubo de concreto e escavadeira",
  "exploracao-mineral": "Geólogo ao lado de um afloramento rochoso em terreno de solo vermelho, com caminhonete na estrada de terra e chapadas ao fundo",
  mineracao: "Técnico de colete laranja e capacete na borda de uma mina a céu aberto com bancadas de minério e caminhão fora de estrada",
};
