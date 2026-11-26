// Content and scoring for /checklist-operacao/, the self-assessment that opens the
// bootcamp funnel. The page renders the areas on the server and its script imports
// calcularResultado() from here, so the copy and the rule live in one place.
//
// Rule of the copy: no TerraNode features, no customer results, nothing that reads as a
// benchmark. The result is a reflection exercise, and the page says so.

/** Links still to be decided. A null renders as a visible placeholder, never a dead link. */
export const LINKS = {
  /** The privacy policy page. The site has none yet. */
  privacidade: null as string | null,
  /** Endpoint that receives the 14-day challenge sign-up (POST, JSON). */
  inscricaoDesafio: null as string | null,
  /** Start date of the next challenge, as shown on the page ("2 de fevereiro"). */
  dataDesafio: null as string | null,
  /** Endpoint that receives the e-mail form (POST, JSON). No form backend exists yet. */
  envioEmail: null as string | null,
};

export const RESPOSTAS = [
  { valor: 2, rotulo: "Sim, de forma consistente" },
  { valor: 1, rotulo: "Às vezes" },
  { valor: 0, rotulo: "Ainda não / Não sei" },
] as const;

export type Valor = (typeof RESPOSTAS)[number]["valor"];

export interface Area {
  id: string;
  nome: string;
  /** One line under the area title, saying what the area is about. */
  descricao: string;
  afirmacoes: string[];
  /** Shown when this is the strongest area. */
  forte: string;
  /** Shown when this is the area with the most room to improve. */
  fraca: string;
  /** The action for this week, when this is the area with the most room to improve. */
  acao: string;
}

// The order is also the tie-break: without visibility the other areas are hard to work on.
export const AREAS: Area[] = [
  {
    id: "visibilidade",
    nome: "Visibilidade",
    descricao: "Conseguimos acompanhar o andamento do trabalho e ver onde ele fica parado.",
    afirmacoes: [
      "No fim do dia, sabemos quais atividades de campo planejadas foram concluídas.",
      "Quando uma atividade atrasa, ficamos sabendo no mesmo dia.",
      "Conseguimos dizer em que etapa está cada trabalho em andamento.",
    ],
    forte: "Vocês sabem o que acontece no campo sem precisar perguntar.",
    fraca: "Hoje, saber o andamento do campo depende de perguntar a alguém.",
    acao: "Escolha um serviço que se repete. Durante uma semana, anote quando cada atividade começou e terminou. No fim, veja onde o trabalho ficou parado.",
  },
  {
    id: "clareza",
    nome: "Clareza dos processos",
    descricao: "As pessoas entendem as etapas, os responsáveis e as passagens de trabalho.",
    afirmacoes: [
      "As etapas dos nossos principais serviços de campo estão escritas em um lugar que a equipe consulta.",
      "Cada etapa desses serviços tem um responsável definido.",
      "Quem recebe os dados do campo sabe o que conferir antes de passá-los adiante.",
    ],
    forte: "A equipe sabe quem faz o quê e em que ordem.",
    fraca: "Etapas e responsáveis ainda ficam na cabeça de cada pessoa.",
    acao: "Escreva em uma página as etapas de um serviço, com um responsável ao lado de cada uma. Mostre para duas pessoas da equipe e pergunte o que falta.",
  },
  {
    id: "consistencia",
    nome: "Consistência",
    descricao: "O trabalho importante sai confiável, sem depender da memória de uma pessoa.",
    afirmacoes: [
      "Duas pessoas fazendo o mesmo serviço registram as informações da mesma forma.",
      "Se a pessoa mais experiente ficar uma semana fora, o trabalho segue no mesmo padrão.",
      "Os registros chegam completos, sem precisar voltar a campo para corrigir.",
    ],
    forte: "O trabalho sai no mesmo padrão, seja quem for a pessoa que faz.",
    fraca: "O padrão do trabalho ainda depende de quem vai a campo.",
    acao: "Pegue três registros recentes do mesmo serviço, feitos por pessoas diferentes, e compare. Anote o que cada uma fez de um jeito diferente.",
  },
  {
    id: "medicao",
    nome: "Medição",
    descricao: "Acompanhamos poucos indicadores úteis e olhamos para eles com regularidade.",
    afirmacoes: [
      "Temos até cinco indicadores definidos para a operação.",
      "Revisamos os números da operação em uma data fixa, como toda semana ou todo mês.",
      "Sabemos quanto tempo leva, em média, entre a coleta em campo e a entrega do resultado.",
    ],
    forte: "Vocês têm números para conversar sobre a operação.",
    fraca: "Os números da operação ainda não fazem parte da rotina.",
    acao: "Escolha um indicador que você já consegue levantar hoje, como atividades concluídas na semana. Reserve 15 minutos por semana para olhar para ele.",
  },
  {
    id: "melhoria",
    nome: "Melhoria contínua",
    descricao: "Quando algo dá errado ou demora demais, investigamos a causa e mudamos.",
    afirmacoes: [
      "Quando um erro chega ao cliente ou ao relatório, investigamos a causa.",
      "Depois de investigar um problema, mudamos algo no processo para que ele não se repita.",
      "Quem está em campo tem um jeito simples de avisar quando algo no processo não funciona.",
    ],
    forte: "Quando algo dá errado, vocês mudam o processo.",
    fraca: "Os problemas costumam ser corrigidos caso a caso, sem mudar o processo.",
    acao: "Pegue o último retrabalho ou retorno a campo e pergunte \"por quê?\" até chegar a uma causa que dependa de vocês. Combine uma mudança pequena para testar.",
  },
];

export const TOTAL_AFIRMACOES = AREAS.reduce((n, a) => n + a.afirmacoes.length, 0);

export const NIVEIS = {
  boas: {
    nome: "Boas bases",
    texto: "A maior parte das práticas já funciona. O próximo passo é deixar uma área mais confiável ou levá-la a outras equipes.",
  },
  oportunidades: {
    nome: "Oportunidades de melhoria",
    texto: "Algumas práticas funcionam, mas há lacunas que pesam na rotina. Vale escolher uma e tratar dela primeiro.",
  },
  basico: {
    nome: "Comece pelo básico",
    texto: "Várias práticas ainda dependem de memória ou improviso, o que é comum. Comece por um único serviço de campo e organize só ele.",
  },
} as const;

export type Nivel = keyof typeof NIVEIS;

/** A per-area label instead of a percentage, so the result never reads as a measurement. */
export function situacao(fracao: number): string {
  if (fracao >= 0.67) return "Funciona bem";
  if (fracao >= 0.34) return "Em parte";
  return "Ainda falta";
}

// The per-area sentences describe an area that works well (forte) or one that is missing
// (fraca). The strongest area can still be weak, and the weakest can still work well, so
// those cases get a sentence that only compares.
export function textoForte(area: Area, fracao: number): string {
  return fracao >= 0.67 ? area.forte : "É a área em que vocês estão mais perto de uma prática consistente.";
}
export function textoFraca(area: Area, fracao: number): string {
  return fracao < 0.67 ? area.fraca : "Já funciona bem, mas é onde ainda há mais espaço para ajustar.";
}

/** Question key in the form and in saved progress: "<area id>-<index>". */
export const chave = (area: Area, i: number) => `${area.id}-${i}`;

export type Respostas = Record<string, Valor>;

export interface Resultado {
  nivel: Nivel;
  /** Share of the maximum score per area, 0 to 1, in AREAS order. */
  areas: { area: Area; fracao: number }[];
  forte: Area;
  fraca: Area;
  /** Every area scored the same, so strongest and weakest say nothing. */
  empate: boolean;
}

// Sim 2, Às vezes 1, Ainda não 0. An area scores its points over its maximum; the overall
// score is the mean of the areas. A high overall score with one area under 34% is capped
// at "oportunidades", so a blind spot is never called a good base.
export function calcularResultado(respostas: Respostas): Resultado {
  const areas = AREAS.map((area) => {
    const pontos = area.afirmacoes.reduce((s, _, i) => s + (respostas[chave(area, i)] ?? 0), 0);
    return { area, fracao: pontos / (2 * area.afirmacoes.length) };
  });
  const fracoes = areas.map((a) => a.fracao);
  const geral = fracoes.reduce((s, f) => s + f, 0) / fracoes.length;
  const menor = Math.min(...fracoes);
  const maior = Math.max(...fracoes);

  const nivel: Nivel = geral >= 0.7 && menor >= 0.34 ? "boas" : geral >= 0.4 ? "oportunidades" : "basico";

  // find() returns the first match, so ties go to the earlier area in AREAS.
  const forte = areas.find((a) => a.fracao === maior)!.area;
  const fraca = areas.find((a) => a.fracao === menor)!.area;

  return { nivel, areas, forte, fraca, empate: maior === menor };
}
