// Plans and prices for /precos/. The cards, the comparison table, the team-size calculator
// and the Offer JSON-LD all read from here, so a price only ever changes in one place.

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
  /** Line above the list when the plan inherits another one. */
  herda?: string;
  inclui: string[];
  naoInclui?: string[];
}

export const PLANOS: Plano[] = [
  {
    id: "essencial",
    nome: "Essencial",
    resumo: "Coleta ilimitada, relatórios sob demanda e exportação dos seus dados, sem integrações.",
    preco: 1500,
    minimo: 5,
    extra: 300,
    inclui: [
      "Projetos, formulários e coletas ilimitados",
      "Importação de formulários do Survey123 (XLSForm)",
      "5 GB de armazenamento",
      "Relatórios sob demanda, com 3 modelos",
      "Fontes de dados públicas",
      "Exportação de coletas e mídias",
      "Exportação de dados GIS privados (vetor e raster)",
      "Suporte por e-mail em até 48h",
    ],
    naoInclui: ["Sem integrações", "Sem IA"],
  },
  {
    id: "profissional",
    nome: "Profissional",
    resumo: "Relatórios agendados, IA e integração com ArcGIS Online, Google Sheets e Microsoft 365.",
    preco: 2250,
    minimo: 5,
    extra: 450,
    herda: "Tudo do Essencial, e:",
    inclui: [
      "50 GB de armazenamento",
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
    herda: "Tudo do Profissional, e:",
    inclui: [
      "200 GB de armazenamento",
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
  limites: ["Sem exportação de coletas", "Sem relatórios", "5 GB de armazenamento"],
};

export const EXTRAS = {
  armazenamento: { pacote: "10 GB", preco: "Preço em breve" },
  implementacao: { valorHora: 300, minimoHoras: 100 },
};

/** A table cell: text, or true/false for included/not included. */
export type Celula = string | boolean;

export interface GrupoComparacao {
  grupo: string;
  /** Each row's values follow the order of PLANOS. */
  linhas: { nome: string; valores: [Celula, Celula, Celula] }[];
}

export const COMPARACAO: GrupoComparacao[] = [
  {
    grupo: "Uso",
    linhas: [
      { nome: "Projetos", valores: ["Ilimitados", "Ilimitados", "Ilimitados"] },
      { nome: "Formulários", valores: ["Ilimitados", "Ilimitados", "Ilimitados"] },
      { nome: "Coletas", valores: ["Ilimitadas", "Ilimitadas", "Ilimitadas"] },
      { nome: "Importar formulários do Survey123 (XLSForm)", valores: [true, true, true] },
      { nome: "Armazenamento", valores: ["5 GB", "50 GB", "200 GB"] },
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
      { nome: "Fontes de dados públicas", valores: [true, true, true] },
      { nome: "Exportação de dados", valores: ["Coletas e mídias", "Coletas, mídias e trajetos", "Coletas, mídias e trajetos"] },
      { nome: "Exportação de dados GIS (vetor e raster)", valores: ["Privados", "Públicos e privados", "Públicos e privados"] },
      { nome: "Log de atividades do projeto", valores: [false, true, true] },
    ],
  },
  {
    grupo: "Integrações e automação",
    linhas: [
      { nome: "ArcGIS Online", valores: [false, true, true] },
      { nome: "ArcGIS Enterprise", valores: [false, false, true] },
      { nome: "Google Sheets e Microsoft 365", valores: [false, true, true] },
      { nome: "CLI tn", valores: [false, true, true] },
      { nome: "API e webhooks", valores: [false, false, true] },
    ],
  },
  {
    grupo: "Segurança e controle",
    linhas: [
      { nome: "Coletas criptografadas no aparelho, na transmissão e no servidor", valores: [true, true, true] },
      { nome: "Pacote offline criptografado no aparelho", valores: [false, false, true] },
      { nome: "Revogar dispositivo em campo", valores: [false, false, true] },
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

/** Monthly total for a number of collectors: below the minimum, the minimum is what's paid. */
export const totalMensal = (plano: Pick<Plano, "preco" | "minimo" | "extra">, coletores: number) =>
  plano.preco + plano.extra * Math.max(0, coletores - plano.minimo);

/** The line above the price, saying how many collectors that price is for. */
export const rotuloColetores = (minimo: number, coletores: number) =>
  coletores <= minimo ? `${minimo} coletores incluídos` : `${coletores} ${coletores === 1 ? "coletor" : "coletores"}`;
