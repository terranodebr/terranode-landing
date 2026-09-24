import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Astro 7 has no implicit "directory under src/content = collection" behaviour;
// a collection exists only once it is declared here with a loader.
// Only `solucoes`, `comparativos` and `recursos` are declared for now — blog/ and ajuda/ are
// still empty, and a glob over an empty directory only produces warnings.

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

    /**
     * No máximo 4: Steps.astro casa cada passo com um dos quatro mockups em
     * src/components/steps/, e um quinto passo renderizaria um slide sem visual.
     * O limite aqui faz o build falhar com mensagem clara, em vez de publicar a
     * página torta.
     */
    passos: z
      .array(
        z.object({
          label: z.string(),
          titulo: z.string(),
          texto: z.string(),
        }),
      )
      .min(1)
      .max(4),

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

const comparativos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/comparativos" }),
  schema: z.object({
    /** <title> and og:title. Written for search ("alternativa a X"), not for the H1. */
    title: z.string(),
    /** <meta name="description">. */
    description: z.string(),
    /** Competitor name as it appears in the table header and the index card. */
    concorrente: z.string(),
    /** Page H1. Written for the reader. */
    h1: z.string(),
    /** Hero paragraph under the H1. */
    subtitulo: z.string(),
    /** Position in the footer's Comparativos column, ascending. */
    ordem: z.number(),
    /** Same contract as solucoes: defaults to true, production builds skip drafts. */
    draft: z.boolean().default(true),
    /** Path under public/, or an absolute URL. Falls back to the site default. */
    image: z.string().optional(),

    /** The three summary cards. Each text is a full sentence, starting with "Se". */
    resumo: z.object({
      concorrente: z.string(),
      terranode: z.string(),
      diferenca: z.string(),
    }),

    /**
     * Side-by-side table. Every claim about the competitor has to be backed by one
     * of the `fontes` below, and "A confirmar" is only acceptable while draft: true.
     */
    tabela: z
      .array(
        z.object({
          criterio: z.string(),
          terranode: z.string(),
          concorrente: z.string(),
        }),
      )
      .min(1),

    /**
     * Competitor side of the flow comparison (src/layouts/Comparativo.astro). The TerraNode
     * side is fixed in src/lib/fluxo.ts. `icone` picks one of its line icons.
     */
    fluxo: z.object({
      /** Column heading, with the article: "Com o Fulcrum". */
      titulo: z.string(),
      passos: z
        .array(
          z.object({
            icone: z.enum([
              "navegador", "desktop", "app", "nuvem", "planilha",
              "painel", "exportar", "config", "servidor", "revisao",
            ]),
            titulo: z.string(),
            detalhe: z.string(),
          }),
        )
        .min(3)
        .max(5),
    }),

    diferencas: z
      .array(
        z.object({
          titulo: z.string(),
          texto: z.string(),
        }),
      )
      .min(1)
      .max(3),

    /** Where the competitor is the better choice. Kept on purpose: it is what makes the rest credible. */
    ondeMelhor: z.object({
      titulo: z.string(),
      texto: z.string(),
    }),

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

    /**
     * Closing CTA card. Written for someone who uses this competitor
     * today: why switch, in one line, then the ask. The recap list reuses `diferencas`.
     */
    fechamento: z.object({
      titulo: z.string(),
      texto: z.string(),
    }),

    /** Pages the competitor claims were taken from. Prices change, so re-check before publishing. */
    fontes: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .min(1),
    /** Date the sources were last checked, as shown on the page (e.g. "18/09/2026"). */
    consultadoEm: z.string(),
  }),
});

const recursos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recursos" }),
  schema: z.object({
    /** <title> and og:title. Written for search, not for the H1. */
    title: z.string(),
    /** <meta name="description">. */
    description: z.string(),
    /** Feature name, shown in the hero pill and the footer. */
    recurso: z.string(),
    /** Page H1. Written for the reader. */
    h1: z.string(),
    /** Hero paragraph under the H1. */
    subtitulo: z.string(),
    /** Position in the footer's Produto column, ascending. */
    ordem: z.number(),
    /** Same contract as solucoes: defaults to true, production builds skip drafts. */
    draft: z.boolean().default(true),
    /** Path under public/, or an absolute URL. Falls back to the site default. */
    image: z.string().optional(),

    /**
     * Blocos de conteúdo da página. Cada item tem `titulo`, a frase curta em negrito,
     * e `texto`, o detalhe. As ilustrações de cada bloco são escolhidas no layout
     * (src/layouts/Recurso.astro).
     */
    secoes: z
      .array(
        z.object({
          /** Âncora da seção (#importar). Sem acento, separado por hífen. */
          id: z.string().regex(/^[a-z0-9-]+$/),
          eyebrow: z.string(),
          titulo: z.string(),
          itens: z
            .array(
              z.object({
                titulo: z.string(),
                texto: z.string(),
              }),
            )
            .min(1),
        }),
      )
      .min(1),

    /** O recurso que mais merece destaque, com a gravação real que o mostra (`video`). */
    destaque: z
      .object({
        id: z.string().regex(/^[a-z0-9-]+$/),
        eyebrow: z.string(),
        titulo: z.string(),
        texto: z.string(),
        /** Linha curta abaixo do texto, com ícone de cadeado. Usada para privacidade. */
        nota: z.string().optional(),
        video: z
          .object({
            /** Caminho em public/. Toca mudo, em loop, a partir de quando entra na tela. */
            src: z.string(),
            /** Quadro estático em public/, mostrado antes de tocar e com movimento reduzido. */
            poster: z.string(),
            /**
             * A janela do navegador dentro da gravação, em pixels do quadro (largura ×
             * altura do vídeo). O hero recorta só essa área. `raio` arredonda os cantos
             * de cima do recorte. Meça alguns pixels para dentro da borda, para o fundo
             * preto da gravação não vazar. Sem isso, vale a janela da gravação de Catálogos.
             */
            janela: z
              .object({
                quadro: z.tuple([z.number().positive(), z.number().positive()]),
                x: z.number().min(0),
                y: z.number().min(0),
                largura: z.number().positive(),
                altura: z.number().positive(),
                raio: z.number().min(0).default(0),
              })
              .optional(),
            /** Descreve o que acontece no vídeo, para leitor de tela. */
            legenda: z.string(),
            /**
             * Trechos da gravação, mostrados abaixo dela: o trecho que está tocando
             * acende e enche a barra, e clicar em um pula para ele. `inicio` em segundos,
             * em ordem crescente, o primeiro em 0.
             */
            capitulos: z
              .array(
                z.object({
                  inicio: z.number().min(0),
                  titulo: z.string(),
                  texto: z.string(),
                }),
              )
              .min(2)
              .max(4)
              .optional(),
          })
          .optional(),
      })
      .optional(),

    /** Bloco curto de texto, sem ilustração, antes do fechamento. */
    complemento: z
      .object({
        eyebrow: z.string(),
        titulo: z.string(),
        texto: z.string(),
      })
      .optional(),

    /** Closing CTA card. `pontos` is the one-line recap of the page. */
    fechamento: z.object({
      titulo: z.string(),
      texto: z.string(),
      pontos: z.array(z.string()).min(1).max(4),
    }),
  }),
});

export const collections = { solucoes, comparativos, recursos };
