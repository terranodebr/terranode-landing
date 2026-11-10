# AGENTS.md

Regras para quem escreve ou altera este site, pessoa ou agente. O `README.md` explica como rodar o projeto.

## Blog

Os artigos ficam em `src/content/blog/`, um arquivo Markdown por artigo. O layout é `src/layouts/Artigo.astro`.

### Todo artigo tem um CTA

Nenhum artigo é publicado sem um CTA para a lista de espera. O layout garante um, o cartão "Entrar na lista de espera" no fim de cada artigo. Não remova esse cartão.

O corpo pode ter outros CTAs, onde fizerem sentido para o texto. O link é `https://form.typeform.com/to/ZVQYTFV5`. A citação do beta que alguns artigos trazem depois da introdução é um exemplo, e não é obrigatória.

### Todo CTA do blog leva UTMs

Escreva o link da lista de espera sem parâmetros no Markdown. O build acrescenta os UTMs em todos os links para a lista de espera das páginas do blog, inclusive os do cabeçalho e do rodapé. A função é `listaDeEspera()`, em `src/lib/cta.ts`.

| Parâmetro | Valor |
| --- | --- |
| `utm_source` | `blog` |
| `utm_medium` | `artigo` em uma página de artigo, `indice` em `/blog/` |
| `utm_campaign` | o slug do artigo, ou `indice` em `/blog/` |
| `utm_content` | a posição do link: `corpo`, `fechamento`, `cabecalho` ou `rodape` |

Exemplo, para o link no corpo de um artigo:

```
https://form.typeform.com/to/ZVQYTFV5?utm_source=blog&utm_medium=artigo&utm_campaign=como-revisar-coletas-de-campo&utm_content=corpo
```

Ao criar um CTA novo em uma página do blog, use `listaDeEspera()` com uma posição nova em `PosicaoCta`, e acrescente a posição à tabela acima. Não escreva UTMs à mão.
