---
title: "Alternativa ao Felt Maps para coleta em campo · TerraNode"
description: "O Felt é um SIG na web com app de campo em inglês. O TerraNode é feito para a coleta, com revisão ponto a ponto e suporte em português."
concorrente: "Felt"
h1: "TerraNode vs Felt"
subtitulo: "O Felt Maps é um SIG na web para montar mapas e analisar dados, e a coleta em campo é um dos recursos dele. O TerraNode é feito para a coleta: cada ponto passa por revisão antes de virar dado, e o suporte é em português."
ordem: 6
draft: true
setor: "agro"

resumo:
  concorrente: "Se o seu time precisa de um SIG na web para publicar mapas, cruzar bases, montar dashboards e analisar com IA, e a coleta é só uma parte do trabalho."
  terranode: "Se o centro do trabalho é o levantamento de campo, a equipe trabalha em português e cada ponto precisa ser conferido antes de entrar na base."
  diferenca: "No Felt, o que vem do campo entra direto no mapa, e o status é um atributo que você cria e colore. No TerraNode, todo ponto entra numa fila para validar ou rejeitar, e a rejeição volta ao coletor com o comentário."

tabela:
  - criterio: "Foco do produto"
    terranode: "Coleta em campo e revisão"
    concorrente: "SIG na web, com mapas, análise, dashboards e IA. A coleta é feita no Field App"
  - criterio: "Apps iOS e Android"
    terranode: "Android nativo. iOS em breve"
    concorrente: "Sim, desde novembro de 2025"
  - criterio: "Idioma do app"
    terranode: "Português"
    concorrente: "Inglês"
  - criterio: "Coleta offline"
    terranode: "Sim"
    concorrente: "A partir do plano Business"
  - criterio: "GNSS externo"
    terranode: "Sim"
    concorrente: "Sim. No iOS, só receptores com certificação MFi"
  - criterio: "Formulário sem código"
    terranode: "Sim, com 13 tipos de campo, lógica condicional e geração por IA"
    concorrente: "Gerado dos atributos da camada. Lógica condicional e campo obrigatório a partir do Business"
  - criterio: "Revisão com validar, rejeitar e retorno ao coletor"
    terranode: "Nativa, em fila"
    concorrente: "Não é um fluxo pronto. O status é um atributo da camada"
  - criterio: "Análise e dashboards"
    terranode: "Painel com a produção de cada coletor"
    concorrente: "Dashboards, SQL e Felt AI, conforme o plano"
  - criterio: "Suporte"
    terranode: "Em português, direto com o time do produto"
    concorrente: "Suporte técnico premium no Enterprise"

fluxo:
  titulo: "Com o Felt"
  passos:
    - icone: "navegador"
      titulo: "Monte o mapa na web"
      detalhe: "Suba as camadas e defina os atributos que o campo vai preencher."
    - icone: "config"
      titulo: "Configure a pesquisa"
      detalhe: "Cada atributo vira um campo. Lógica condicional a partir do Business."
    - icone: "app"
      titulo: "Colete no Field App"
      detalhe: "iOS ou Android, em inglês. Offline a partir do Business."
    - icone: "painel"
      titulo: "Acompanhe no mapa e exporte"
      detalhe: "O ponto entra direto na camada. A conferência fica com a equipe."

diferencas:
  - titulo: "Revisão antes de virar dado"
    texto: "Cada ponto passa por um revisor no navegador. Quem coletou recebe a rejeição com o comentário e corrige no app. No Felt, o que chega do campo entra direto no mapa."
  - titulo: "App e suporte em português"
    texto: "O app de campo, o painel e o suporte são em português, com o time que constrói o produto. O Field App do Felt está só em inglês na App Store."
  - titulo: "Formulário pensado para o levantamento"
    texto: "Você arrasta os campos ou descreve o levantamento, e a IA monta a primeira versão, com precisão mínima por campo. No Felt, o formulário sai dos atributos da camada."

ondeMelhor:
  titulo: "Onde o Felt vai melhor"
  texto: "O Felt é um SIG completo na web. Ele sobe e estiliza Shapefile, KML, GeoTIFF e planilhas, conecta bancos de dados e o ArcGIS, roda SQL, monta dashboards e responde perguntas sobre os dados com IA. Visualizar e comentar não ocupa assento, e o app de campo já roda no iOS. Se a coleta é uma parte de um trabalho maior de análise e publicação de mapas, ele resolve mais coisas num lugar só."

faq:
  - q: "O Felt é gratuito?"
    a: "Tem um plano gratuito para criar e anotar mapas, mas sem subir dados nem coletar em campo. A coleta com formulário e fotos começa no plano Team, de US$ 199 por mês no pagamento anual, com 3 assentos."
    badge: "Mais perguntada"
  - q: "Quanto custa o Felt?"
    a: "Conforme o site oficial, o Team custa US$ 199 por mês e o Business US$ 599 por mês no pagamento anual, ou US$ 249 e US$ 749 no mensal. Cada assento extra sai por US$ 49 a US$ 59 por mês. Coleta offline e formulário com lógica condicional ficam no Business."
  - q: "Quem coleta em campo no Felt precisa de assento?"
    a: "Sim. Pelo site do Felt, quem cria mapas, edita dados, coleta em campo, trabalha offline ou usa a IA ocupa um assento. Só visualizar e comentar é gratuito."
  - q: "O Felt tem app em português?"
    a: "O Field App aparece só em inglês na App Store. No TerraNode, o app, o painel e o suporte são em português."
  - q: "Dá para usar o Felt com o QGIS?"
    a: "Sim, a partir do plano Team, com um plugin do QGIS. O TerraNode leva o dado validado ao QGIS em Shapefile ou GeoJSON."

fechamento:
  titulo: "Coleta com revisão, em português."
  texto: "Para quem tem o campo no centro do trabalho: formulário, coleta offline e revisão ponto a ponto. Entre na lista de espera e fale direto com quem constrói o produto."

fontes:
  - label: "Felt, preços"
    url: "https://felt.com/pricing"
  - label: "Felt, lançamento do Field App para iOS e Android"
    url: "https://felt.com/blog/field-app-for-ios-and-android"
  - label: "Felt, coleta de dados em campo"
    url: "https://help.felt.com/field-app/guide-field-data-collection"
  - label: "Felt, modo offline"
    url: "https://help.felt.com/field-app/offline-support"
  - label: "Felt, receptores GNSS externos"
    url: "https://help.felt.com/field-app/external-gnss-receivers"
  - label: "App Store, Felt: Field App"
    url: "https://apps.apple.com/us/app/id6754033379"
consultadoEm: "12/11/2026"
---
