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
  content/
    solucoes/       Páginas de setor, uma por arquivo .md
    blog/           (vazio, ainda não implementado)
    ajuda/          (vazio, ainda não implementado)
    comparativos/   (vazio, ainda não implementado)
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
dores: [...]          # 3 problemas do setor
passos: [...]         # 4 etapas do fluxo
campos: [...]         # campos típicos do formulário
faq: [...]            # perguntas e respostas
---

Aqui vai a prosa, em markdown.
```

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
