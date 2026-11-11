# AGENTS.md

Regras para quem escreve ou altera este site, pessoa ou agente. O `README.md` explica como rodar o projeto.

## Blog

Os artigos ficam em `src/content/blog/`, um arquivo Markdown por artigo. O layout é `src/layouts/Artigo.astro`.

### Todo artigo tem um CTA

Nenhum artigo é publicado sem um CTA para a lista de espera. O layout garante um, o cartão "Entrar na lista de espera" no fim de cada artigo. Não remova esse cartão.

O corpo pode ter outros CTAs, onde fizerem sentido para o texto. O link é `https://form.typeform.com/to/ZVQYTFV5`. A citação do beta que alguns artigos trazem depois da introdução é um exemplo, e não é obrigatória.

### O convite no meio do artigo

Para um CTA mais forte no corpo, escreva `<!-- lista-de-espera -->` numa linha própria, no ponto do texto em que o leitor está mais convencido, em geral logo depois da seção que mostra o produto. O layout troca a marca por um cartão escuro com a tela do app, as vantagens de quem entra como early tester e o botão para a lista de espera. O componente é `src/components/blog/Convite.astro`.

Use uma marca só por artigo. O título e o texto do cartão têm um padrão, e cada artigo pode trocar os dois no frontmatter:

```yaml
convite:
  titulo: "Sua próxima campanha com o dado no Brasil e criptografado desde o celular"
  texto: "O TerraNode está em beta fechado com equipes de campo selecionadas. ..."
```

As vantagens são as que a home promete a um early tester. Não prometa no cartão o que o produto ainda não entrega.

### Todo CTA do blog leva UTMs

Escreva o link da lista de espera sem parâmetros no Markdown. O build acrescenta os UTMs em todos os links para a lista de espera das páginas do blog, inclusive os do cabeçalho e do rodapé. A função é `listaDeEspera()`, em `src/lib/cta.ts`.

| Parâmetro | Valor |
| --- | --- |
| `utm_source` | `blog` |
| `utm_medium` | `artigo` em uma página de artigo, `indice` em `/blog/` |
| `utm_campaign` | o slug do artigo, ou `indice` em `/blog/` |
| `utm_content` | a posição do link: `corpo`, `convite`, `fechamento`, `cabecalho` ou `rodape` |

Exemplo, para o link no corpo de um artigo:

```
https://form.typeform.com/to/ZVQYTFV5?utm_source=blog&utm_medium=artigo&utm_campaign=como-revisar-coletas-de-campo&utm_content=corpo
```

Ao criar um CTA novo em uma página do blog, use `listaDeEspera()` com uma posição nova em `PosicaoCta`, e acrescente a posição à tabela acima. Não escreva UTMs à mão.
