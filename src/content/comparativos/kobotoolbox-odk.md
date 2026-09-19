---
title: "Alternativa ao KoboToolbox para mapeamento"
description: "Kobo e ODK são para questionários. O TerraNode é para levantamentos em que a geometria importa."
concorrente: "KoboToolbox / ODK"
h1: "TerraNode vs KoboToolbox e ODK"
subtitulo: "Kobo e ODK foram feitos para questionários. O TerraNode foi feito para levantamentos em que a geometria importa tanto quanto as respostas."
ordem: 4
draft: true

resumo:
  concorrente: "Se o levantamento é um questionário, se você é uma organização sem fins lucrativos que usa o plano gratuito, ou se precisa de código aberto e auto-hospedagem."
  terranode: "Se o dado é um polígono, uma rede ou um vértice, com precisão centimétrica e mapa sempre visível para quem coleta."
  diferenca: "No TerraNode o mapa é a tela principal do coletor, e a exportação já sai em Shapefile e GeoJSON."

tabela:
  - criterio: "Foco"
    terranode: "Levantamento geoespacial"
    concorrente: "Questionário e pesquisa"
  - criterio: "App nativo iOS"
    terranode: "Sim"
    concorrente: "Não. No iPhone, a coleta é por formulário web"
  - criterio: "App nativo Android"
    terranode: "Sim"
    concorrente: "Sim (KoboCollect, ODK Collect)"
  - criterio: "Montagem de formulário"
    terranode: "Arrastar campos ou descrever para a IA"
    concorrente: "Editor web ou planilha XLSForm"
  - criterio: "Mapa visível durante a coleta"
    terranode: "Sim, com pontos, linhas e polígonos"
    concorrente: "Mapa por pergunta de geometria"
  - criterio: "GNSS externo"
    terranode: "Sim, ±3 cm"
    concorrente: "Possível no Android, via configuração do aparelho"
  - criterio: "Revisão de registros"
    terranode: "Fila com validar, rejeitar e comentário ao coletor"
    concorrente: "ODK Central tem aprovado, rejeitado e com problemas, com comentários"
  - criterio: "Código aberto"
    terranode: "Não"
    concorrente: "Sim"
  - criterio: "Preço"
    terranode: "Ainda não divulgado"
    concorrente: "Kobo tem plano gratuito para ONGs (5.000 envios/mês). ODK Cloud a partir de US$ 199/mês"

fluxo:
  titulo: "Com Kobo ou ODK"
  passos:
    - icone: "planilha"
      titulo: "Escreva o formulário"
      detalhe: "No editor web ou numa planilha XLSForm."
    - icone: "app"
      titulo: "Colete no Android"
      detalhe: "No iPhone, a coleta é por formulário web."
    - icone: "painel"
      titulo: "Revise os envios"
      detalhe: "Tabela de respostas. O ODK Central marca aprovado ou rejeitado."
    - icone: "exportar"
      titulo: "Leve a geometria para o GIS"
      detalhe: "Exporte e monte o mapa em outra ferramenta."

diferencas:
  - titulo: "O mapa é a tela principal"
    texto: "O coletor vê o que já foi levantado enquanto anda, mesmo sem sinal. A geometria não é uma pergunta no meio do questionário."
  - titulo: "Precisão que o levantamento pede"
    texto: "Precisão mínima configurável por campo e ±3 cm com GNSS externo, no iOS e no Android."
  - titulo: "Formulário sem planilha"
    texto: "Nada de XLSForm. Você arrasta os campos ou descreve o levantamento e a IA monta a primeira versão."

ondeMelhor:
  titulo: "Onde Kobo e ODK vão melhor"
  texto: "Para pesquisas domiciliares, censos e questionários longos, com lógica de salto, cálculos e vários idiomas, eles são o padrão do setor. São código aberto, e o Kobo é gratuito para organizações humanitárias e sem fins lucrativos."

faq:
  - q: "Qual a melhor alternativa ao KoboToolbox para mapeamento?"
    a: "Se o foco é geometria e precisão, o TerraNode. Se é questionário, continue no Kobo."
    badge: "Mais perguntada"
  - q: "O TerraNode funciona no iPhone?"
    a: "Sim, com app nativo para iOS e Android."
  - q: "Consigo importar meu XLSForm?"
    a: "A confirmar com o time."

fontes:
  - label: "ODK, planos e recursos"
    url: "https://getodk.org/"
  - label: "ODK Central, revisão de envios"
    url: "https://docs.getodk.org/central-submissions/"
  - label: "KoboToolbox, coleta por formulário web"
    url: "https://support.kobotoolbox.org/data_through_webforms.html"
  - label: "KoboToolbox, preços"
    url: "https://www.kobotoolbox.org/pricing/"
consultadoEm: "18/09/2026"
---
