---
title: "Alternativa ao ArcGIS Field Maps · TerraNode"
description: "Use as camadas do seu ArcGIS em campo, com coleta offline e revisão de pontos, sem uma licença ArcGIS para cada coletor."
concorrente: "ArcGIS Field Maps / Survey123"
h1: "TerraNode vs ArcGIS Field Maps e Survey123"
subtitulo: "Sua equipe GIS continua no ArcGIS. Quem vai a campo usa o TerraNode, com as camadas do seu portal no mapa e sem precisar de uma licença ArcGIS."
ordem: 2
draft: false
setor: "energia"

resumo:
  concorrente: "Se o dado coletado precisa ser gravado direto nas camadas do portal, ou se todos os seus coletores já têm um tipo de usuário com coleta."
  terranode: "Se sua organização já tem ArcGIS e quer levar as camadas para o campo sem uma licença por coletor, inclusive para terceirizados e equipes sazonais."
  diferenca: "Para coletar pelos apps Field Maps ou Survey123, cada pessoa precisa do tipo de usuário Mobile Worker ou superior. No TerraNode, o coletor entra com uma conta TerraNode e vê as camadas do seu portal, com a simbologia."

tabela:
  - criterio: "Licença ArcGIS para quem coleta"
    terranode: "Não precisa"
    concorrente: "Mobile Worker ou superior"
  - criterio: "Usa as camadas do seu portal ArcGIS"
    terranode: "Sim, sincronizadas do ArcGIS Online ou Enterprise, com a simbologia"
    concorrente: "Sim, nativo"
  - criterio: "Onde fica o dado coletado"
    terranode: "No TerraNode. O dado validado vai para o ArcGIS em Shapefile ou GeoJSON"
    concorrente: "Direto nas camadas do portal"
  - criterio: "Montagem de formulário"
    terranode: "Arrastar campos, descrever para a IA ou gerar das colunas de uma camada do portal"
    concorrente: "Designer web ou XLSForm no Survey123 Connect"
  - criterio: "Coleta offline"
    terranode: "Sim"
    concorrente: "Sim"
  - criterio: "GNSS externo"
    terranode: "Sim"
    concorrente: "Sim"
  - criterio: "Revisão com validar, rejeitar e retorno ao coletor"
    terranode: "Nativa, em fila"
    concorrente: "Montada pelo cliente com campos de status, mapas e dashboards"
  - criterio: "Apps de campo"
    terranode: "Um app"
    concorrente: "Field Maps e Survey123, conforme o fluxo"
  - criterio: "Suporte no Brasil"
    terranode: "Em português, direto com o time do produto"
    concorrente: "Pela Imagem, distribuidora oficial da Esri no Brasil"

fluxo:
  titulo: "Com o ArcGIS"
  passos:
    - icone: "servidor"
      titulo: "Publique as camadas"
      detalhe: "Feature layers no portal. No Survey123, o designer web cria a camada ao publicar."
    - icone: "navegador"
      titulo: "Configure mapa e formulário"
      detalhe: "Mapa web no Field Maps Designer, ou formulário no Survey123."
    - icone: "config"
      titulo: "Atribua tipos de usuário"
      detalhe: "Cada coletor precisa do tipo Mobile Worker ou superior."
    - icone: "app"
      titulo: "Colete no Field Maps ou Survey123"
      detalhe: "O app muda conforme o fluxo."
    - icone: "painel"
      titulo: "Monte a revisão"
      detalhe: "Campos de status, filtros e dashboards configurados pela equipe GIS."
  tela:
    src: "../../assets/concorrentes/arcgis-field-maps.webp"
    alt: "ArcGIS Field Maps: mapa de ativos de uma rede e o formulário de um ponto no celular"
    credito:
      texto: "Site da Esri"
      url: "https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/overview"

diferencas:
  - titulo: "Sem licença ArcGIS para quem coleta"
    texto: "O coletor entra com uma conta TerraNode. As licenças ArcGIS ficam com quem publica e analisa os dados, e você chama terceirizados e equipes sazonais sem mexer nos tipos de usuário da organização."
  - titulo: "As camadas do portal no mapa de campo"
    texto: "Conecte o ArcGIS Online ou Enterprise e sincronize camadas, tabelas e Image Services com a simbologia. A equipe vê essas camadas em campo, e o formulário pode nascer das colunas de uma delas."
  - titulo: "A revisão já vem pronta"
    texto: "No ArcGIS, um fluxo de aprovação é montado com campos de status e filtros. No TerraNode, todo ponto entra numa fila, e o comentário da rejeição volta para quem coletou."

ondeMelhor:
  titulo: "Onde o ArcGIS vai melhor"
  texto: "O TerraNode lê as camadas do seu portal, mas devolve o dado por exportação, em Shapefile ou GeoJSON. Se o que se coleta em campo precisa entrar direto nas camadas do portal, fique no Field Maps. Ele também compartilha a localização da equipe em campo e se integra a sistemas corporativos, coisas que o TerraNode não faz."

faq:
  - q: "Quem coleta no TerraNode precisa de licença ArcGIS?"
    a: "Não. O coletor usa uma conta TerraNode. A organização conecta o ArcGIS Online ou Enterprise uma vez, por OAuth ou chave de API, e as camadas aparecem para a equipe."
    badge: "Mais perguntada"
  - q: "Posso usar as camadas que já tenho no ArcGIS?"
    a: "Sim. Conecte o ArcGIS Online ou Enterprise por OAuth ou chave de API e sincronize camadas, tabelas e Image Services para o catálogo, com a simbologia. A equipe vê essas camadas no mapa de campo, e o formulário pode ser gerado a partir das colunas de uma delas."
  - q: "Como o dado coletado volta para o ArcGIS?"
    a: "Pela exportação. O dado validado sai em Shapefile ou GeoJSON, que abrem no ArcGIS Pro e no ArcGIS Online. O TerraNode não grava direto nas camadas do portal."
  - q: "Existe uma alternativa ao ArcGIS Field Maps mais simples?"
    a: "O TerraNode cobre formulário, coleta offline, GNSS externo e revisão, e usa as camadas do seu ArcGIS sem exigir licença de quem coleta."

fechamento:
  titulo: "Suas camadas do ArcGIS em campo, sem licença por coletor."
  texto: "Conecte o portal, gere o formulário a partir de uma camada e convide a equipe por e-mail. Entre na lista de espera e teste com um levantamento real da sua equipe."

fontes:
  - label: "ArcGIS Field Maps, página de compra"
    url: "https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/buy"
  - label: "ArcGIS Survey123, visão geral"
    url: "https://www.esri.com/en-us/arcgis/products/arcgis-survey123/overview"
  - label: "ArcGIS Online, tipos de usuário"
    url: "https://www.esri.com/en-us/arcgis/products/arcgis-online/buy"
  - label: "Imagem, distribuidora oficial da Esri no Brasil"
    url: "https://www.img.com.br/"
consultadoEm: "23/10/2026"
---
