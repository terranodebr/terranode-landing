# TerraNode — site institucional

Landing page do TerraNode, construída em [Astro](https://astro.build) e publicada
em https://terranode.com.br.

O site é **estático**: não existe servidor, banco de dados nem API em produção.
Todo o HTML é gerado no momento do build e publicado no branch `gh-pages`.

---

## Requisitos

- **Node.js 22** — mesma versão usada pelo CI (`.github/workflows/deploy.yml`).
  Confira com `node --version`.
- **npm 10+** (vem junto com o Node 22).

Se você usa [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 22
nvm use 22
```

## Subindo o projeto localmente

```bash
git clone git@github.com:terranodebr/terranode-landing.git
cd terranode-landing
npm install
npm run dev
```

Abra **http://localhost:4321**. O servidor recarrega sozinho a cada arquivo salvo.

Para parar, `Ctrl+C` no terminal.

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento em http://localhost:4321 |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o conteúdo de `dist/` para conferir o build final |

> `npm run dev` é o que você usa no dia a dia. `npm run build` só é necessário
> para conferir como o site fica em produção — o deploy roda sozinho no CI.

Existe também um `npm run check` (checagem de tipos), mas a dependência dele ainda
não está instalada no projeto: rodar o comando hoje abre um prompt perguntando se
pode instalar. Se quiser usar, instale antes com
`npm i -D @astrojs/check typescript`.

## Estrutura

```
src/
  pages/            Cada arquivo vira uma URL
    index.astro       -> /
    404.astro         -> página de erro
    solucoes/
      index.astro     -> /solucoes/
      [...slug].astro -> /solucoes/<setor>/
    comparativos/
      [...slug].astro -> /comparativos/<concorrente>/ (sem índice, listados no rodapé)
    recursos/
      [...slug].astro -> /recursos/<recurso>/ (sem índice; no menu Funcionalidades e no rodapé)
    blog/
      [...slug].astro -> /blog/ e /blog/<artigo>/ (só existem com um artigo publicado)
      [feed].xml.ts   -> /blog/rss.xml
  content/
    solucoes/       Páginas de setor, uma por arquivo .md
    blog/           Artigos, um por arquivo .md (mesma regra de draft)
    ajuda/          (vazio, ainda não implementado)
    comparativos/   Páginas "TerraNode vs X", uma por arquivo .md (mesma regra de draft)
    recursos/       Páginas de recurso do produto (ex.: Catálogos), mesma regra de draft.
                    O layout (layouts/Recurso.astro) monta a página e escolhe as
                    ilustrações, que ficam em components/recursos/.
  content.config.ts Define quais campos cada .md precisa ter
  layouts/          Estruturas de página reaproveitadas
  components/       Blocos visuais (Hero, Steps, Faq, ...)
  styles/global.css Todo o CSS do site, em classes `tn-*`
  assets/           Imagens processadas pelo Astro
public/             Arquivos servidos como estão (logo, vídeo, robots.txt)
```

## Editando uma página de setor

As páginas de `/solucoes/` são escritas em Markdown, em `src/content/solucoes/`.
O nome do arquivo vira a URL: `energia-e-telecom.md` → `/solucoes/energia-e-telecom/`.

Quase todo o conteúdo fica no **frontmatter** (o bloco entre `---` no topo do
arquivo), e não no corpo do texto. Isso é proposital: cada campo do frontmatter
vira um campo de formulário quando o time entrar com um CMS. Só a seção de
**prosa** vem do corpo em markdown.

```markdown
---
title: "..."          # <title> e og:title — escrito para busca
description: "..."    # meta description
setor: "..."          # nome do setor
h1: "..."             # título principal da página
subtitulo: "..."      # parágrafo abaixo do H1
ordem: 1              # posição na listagem /solucoes/
draft: true           # true = não vai para produção
doresTitulo: "..."    # H2 da seção "O problema hoje"
dores: [...]          # exatamente 3 problemas do setor
passosLead: "..."     # parágrafo abaixo do H2 de "Como funciona"
passos: [...]         # exatamente 4 etapas, cada uma com titulo, texto e lista
camposTitulo: "..."   # H2 da seção "Formulário"
campos: [...]         # campos típicos do formulário
faqTitulo: "..."      # H2 das perguntas frequentes
faq: [...]            # perguntas e respostas (linha em branco = novo parágrafo)
---

Aqui vai a prosa, em markdown.
```

Os textos que são iguais em todo setor (o H2 de "Como funciona", os convites para
participar, a citação e o fechamento) ficam em `src/layouts/Solucao.astro`.

Na prosa, escreva os links internos a partir da raiz (`/recursos/catalogos/`): o
layout acrescenta o caminho do preview sozinho. Links para outros sites abrem em
nova aba. Um bloco de citação (`>`) vira uma nota em destaque, usada para o aviso
sobre normas.

Se faltar um campo obrigatório, o build falha com uma mensagem dizendo qual é —
não dá para publicar uma página quebrada sem perceber.

### Rascunhos (`draft`)

Páginas com `draft: true`:

- **aparecem** em `npm run dev` e nos previews de Pull Request;
- **não são geradas** em produção e não entram no `sitemap.xml`.

Isso evita que uma página com texto pela metade seja indexada pelo Google.
Quando o texto estiver pronto, troque para `draft: false`.

### Criando um setor novo

1. Copie um arquivo existente de `src/content/solucoes/`.
2. Renomeie para o slug desejado (sem acentos, separado por hífen).
3. Ajuste `ordem` para definir a posição na listagem.
4. Rode `npm run dev` e confira em `/solucoes/<slug>/`.

## Escrevendo um artigo do blog

Os artigos ficam em `src/content/blog/`. O nome do arquivo vira a URL:
`como-levar-um-shapefile-para-o-campo.md` → `/blog/como-levar-um-shapefile-para-o-campo/`.
Pense bem nesse nome: o GitHub Pages não faz redirecionamento 301, então trocar a URL de
um artigo publicado custa caro.

Ao contrário das outras páginas, aqui o texto fica no **corpo** do Markdown. O
frontmatter só tem o que o layout, o índice e os buscadores precisam:

```markdown
---
title: "..."          # <title> e og:title, escrito para busca
description: "..."    # meta description e texto do card em /blog/
h1: "..."             # título principal do artigo
subtitulo: "..."      # parágrafo abaixo do H1
categoria: how-tos    # how-tos, novidades, casos ou engenharia
autor: george-silva   # george-silva, bruno-lima ou roque-betiol
publicadoEm: 2026-11-20
atualizadoEm: 2026-12-02        # opcional, para mudança de conteúdo
draft: true           # true = não vai para produção
capa:                 # opcional; também vira a imagem de compartilhamento
  src: "../../assets/blog/meu-artigo/capa.webp"
  alt: "..."
setores: [agro]       # opcional, arquivos de src/content/solucoes/
recursos: [catalogos] # opcional, arquivos de src/content/recursos/
---

O texto começa com um parágrafo, e as seções usam `##`.
```

- **Imagens:** guarde em `src/assets/blog/<artigo>/` e use um caminho relativo:
  `![Descrição da imagem](../../assets/blog/meu-artigo/tela.webp)`. Uma linha em itálico
  logo abaixo vira a legenda.
- **Links:** valem as mesmas regras da prosa dos setores. Escreva os internos a partir da
  raiz (`/recursos/catalogos/`). Links para outros sites abrem em nova aba.
- **Publicação:** o índice, o RSS e os links de Blog no menu e no rodapé só existem depois
  que um artigo tem `draft: false`. Ao publicar, atualize `publicadoEm`. Se o texto tem um
  link para outro artigo em rascunho, o build falha: publique os dois juntos.
- **Afirmações sobre o produto:** confira na documentação do produto e no código, não no
  texto do site.

## Publicação

O deploy é automático:

- **push em `main`** → o workflow `deploy.yml` builda e publica em `gh-pages`,
  que é o que o terranode.com.br serve.
- **abrir um Pull Request** → o workflow `preview.yml` publica uma versão de
  teste em `terranode.com.br/pr-preview/pr-<número>/`.

Previews sempre saem com `noindex`, então nunca competem com o site real na busca.

Não é preciso rodar nada manualmente para publicar.

## Problemas comuns

**A porta 4321 já está em uso**
Rode `npm run dev -- --port 4322`.

**Mudei um `.md` e a página não aparece**
Confirme que `draft` está como `false`, ou olhe em `npm run dev`, onde rascunhos
aparecem normalmente.

**Erro de tipo em `astro:content` depois de mexer no `content.config.ts`**
Rode `npx astro sync` para regerar os tipos.
