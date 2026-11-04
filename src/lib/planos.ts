// Plans and prices for /precos/. The cards, the comparison table, the calculator and the
// Offer JSON-LD all read from here, so a price only ever changes in one place.

/** Storage each plan includes, in GB. */
const GB = { essencial: 5, profissional: 10, corporativo: 50 };

/** The public docs, for comparison rows whose detail has no page on this site. */
const DOCS = "https://docs.terranode.com.br";

export interface Plano {
  id: "essencial" | "profissional" | "corporativo";
  nome: string;
  resumo: string;
  /** Monthly price in reais, which covers `minimo` collectors. */
  preco: number;
  /** Smallest number of collectors the plan is sold to. Only collectors are billed: managers and editors don't count. */
  minimo: number;
  /** Monthly price of each collector above `minimo`. */
  extra: number;
  /** Storage included, in GB. */
  gb: number;
  /** Line above the list when the plan inherits another one. */
  herda?: string;
  inclui: string[];
}

export const PLANOS: Plano[] = [
  {
    id: "essencial",
    nome: "Essencial",
    resumo: "Coleta ilimitada, relatórios sob demanda e exportação dos seus dados.",
    preco: 1500,
    minimo: 5,
    extra: 300,
    gb: GB.essencial,
    inclui: [
      "Projetos, formulários e coletas ilimitados",
      "Importação de formulários do Survey123 (XLSForm)",
      `${GB.essencial} GB de armazenamento`,
      "Relatórios sob demanda, com 3 modelos",
      "Fontes de dados públicas",
      "Exportação de coletas e mídias",
      "Exportação de dados GIS privados (vetor e raster)",
      "Suporte por e-mail em até 48h",
    ],
  },
  {
    id: "profissional",
    nome: "Profissional",
    resumo: "Relatórios agendados, IA e integração com ArcGIS Online, Google Sheets e Microsoft 365.",
    preco: 2250,
    minimo: 5,
    extra: 450,
    gb: GB.profissional,
    herda: "Tudo do Essencial, e:",
    inclui: [
      `${GB.profissional} GB de armazenamento`,
      "Relatórios agendados, com 5 modelos",
      "100 créditos de IA",
      "Exportação também dos trajetos",
      "Exportação de dados GIS públicos e privados (vetor e raster)",
      "Log de atividades do projeto",
      "Integração com ArcGIS Online",
      "Integração com Google Sheets e Microsoft 365",
      "CLI tn",
      "Suporte por e-mail em até 24h",
    ],
  },
  {
    id: "corporativo",
    nome: "Corporativo",
    resumo: "SSO, API, ArcGIS Enterprise e controle dos aparelhos em campo.",
    preco: 8000,
    minimo: 10,
    extra: 800,
    gb: GB.corporativo,
    herda: "Tudo do Profissional, e:",
    inclui: [
      `${GB.corporativo} GB de armazenamento`,
      "Todos os modelos de relatório",
      "Customização de relatório",
      "500 créditos de IA",
      "Pacote offline criptografado no aparelho",
      "Revogar dispositivo em campo",
      "Integração com ArcGIS Enterprise",
      "SSO",
      "API e webhooks",
      "Suporte por e-mail e WhatsApp em até 8h",
    ],
  },
];

/** The trial runs on the plan named here, with these limits on top. */
export const TESTE = {
  dias: 21,
  plano: "profissional" as Plano["id"],
  limites: ["sem exportação de coletas", "sem relatórios", "5 GB de armazenamento"],
};

/** Annual billing: the customer pays this many months and uses twelve, on the whole bill. */
export const MESES_PAGOS_NO_ANUAL = 10;

export const EXTRAS = {
  armazenamento: { pacoteGb: 10, preco: 100 },
  implementacao: { valorHora: 300, minimoHoras: 100 },
};

/** A table cell: text, or true/false for included/not included. */
export type Celula = string | boolean;

export interface GrupoComparacao {
  grupo: string;
  /** Each row's values follow the order of PLANOS. */
  linhas: {
    nome: string;
    valores: [Celula, Celula, Celula];
    /** A page on this site (/recursos/...) or in the docs. Rows with no such page have none. */
    link?: string;
  }[];
}

export const COMPARACAO: GrupoComparacao[] = [
  {
    grupo: "Uso",
    linhas: [
      { nome: "Projetos", link: DOCS + "/projetos/", valores: ["Ilimitados", "Ilimitados", "Ilimitados"] },
      { nome: "Formulários", link: "/recursos/formularios/", valores: ["Ilimitados", "Ilimitados", "Ilimitados"] },
      { nome: "Coletas", link: "/recursos/aplicativo/", valores: ["Ilimitadas", "Ilimitadas", "Ilimitadas"] },
      { nome: "Importar formulários do Survey123 (XLSForm)", link: "/recursos/integracoes/#survey123", valores: [true, true, true] },
      { nome: "Armazenamento", valores: [`${GB.essencial} GB`, `${GB.profissional} GB`, `${GB.corporativo} GB`] },
    ],
  },
  {
    grupo: "Relatórios",
    linhas: [
      { nome: "Geração", valores: ["Sob demanda", "Sob demanda e agendada", "Sob demanda e agendada"] },
      { nome: "Modelos de relatório", valores: ["3", "5", "Todos"] },
      { nome: "Customização de relatório", valores: [false, false, true] },
    ],
  },
  {
    grupo: "IA",
    linhas: [{ nome: "Créditos de IA", valores: [false, "100", "500"] }],
  },
  {
    grupo: "Dados",
    linhas: [
      { nome: "Fontes de dados públicas", link: DOCS + "/catalogos/dados-publicos/", valores: [true, true, true] },
      { nome: "Exportação de dados", link: DOCS + "/dados-de-campo/", valores: ["Coletas e mídias", "Coletas, mídias e trajetos", "Coletas, mídias e trajetos"] },
      { nome: "Exportação de dados GIS (vetor e raster)", link: DOCS + "/catalogos/usar-em-outras-ferramentas/", valores: ["Privados", "Públicos e privados", "Públicos e privados"] },
      { nome: "Log de atividades do projeto", valores: [false, true, true] },
    ],
  },
  {
    grupo: "Integrações e automação",
    linhas: [
      { nome: "ArcGIS Online", link: "/recursos/integracoes/#arcgis", valores: [false, true, true] },
      { nome: "ArcGIS Enterprise", link: "/recursos/integracoes/#arcgis", valores: [false, false, true] },
      { nome: "Google Sheets e Microsoft 365", link: "/recursos/integracoes/#planilhas", valores: [false, true, true] },
      { nome: "CLI tn", link: "/recursos/cli-ia/", valores: [false, true, true] },
      { nome: "API e webhooks", link: DOCS + "/desenvolvedores/api/", valores: [false, false, true] },
    ],
  },
  {
    grupo: "Segurança e controle",
    linhas: [
      { nome: "Coletas criptografadas no aparelho, na transmissão e no servidor", link: "/recursos/seguranca/#criptografia", valores: [true, true, true] },
      { nome: "Pacote offline criptografado no aparelho", link: "/recursos/seguranca/#criptografia", valores: [false, false, true] },
      { nome: "Revogar dispositivo em campo", link: DOCS + "/dados-de-campo/#revogar-um-dispositivo", valores: [false, false, true] },
      { nome: "SSO", valores: [false, false, true] },
    ],
  },
  {
    grupo: "Suporte",
    linhas: [
      { nome: "Canais", valores: ["E-mail", "E-mail", "E-mail e WhatsApp"] },
      { nome: "Prazo de resposta", valores: ["Até 48h", "Até 24h", "Até 8h"] },
    ],
  },
];

/** "R$ 1.500". The no-break space keeps the currency and the number on one line. */
export const brl = (valor: number) => `R$ ${valor.toLocaleString("pt-BR")}`;

/** Monthly total: below the included collectors, the plan's price is what's paid. Storage is sold in whole packs. */
export const totalMensal = (plano: Pick<Plano, "preco" | "minimo" | "extra">, coletores: number, gbExtras = 0) =>
  plano.preco +
  plano.extra * Math.max(0, coletores - plano.minimo) +
  EXTRAS.armazenamento.preco * Math.ceil(gbExtras / EXTRAS.armazenamento.pacoteGb);

/** What annual billing costs for the year, from a monthly total. */
export const totalAnual = (mensal: number) => mensal * MESES_PAGOS_NO_ANUAL;

/** The same annual bill per month, rounded to the real for display. */
export const mensalNoAnual = (mensal: number) => Math.round(totalAnual(mensal) / 12);

/** The card's line about annual billing, which depends on the billing the visitor picked. */
export const rotuloAnual = (mensal: number, anual: boolean) =>
  anual
    ? `${brl(totalAnual(mensal))} por ano. Economia de ${brl(mensal * 12 - totalAnual(mensal))}.`
    : `No pagamento anual: ${brl(mensalNoAnual(mensal))}/mês.`;

/** The line above the price, saying how many collectors that price is for. */
export const rotuloColetores = (minimo: number, coletores: number) =>
  coletores <= minimo ? `${minimo} coletores incluídos` : `${coletores} ${coletores === 1 ? "coletor" : "coletores"}`;
