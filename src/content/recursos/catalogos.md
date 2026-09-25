---
title: "Catálogo de mapas para projetos de campo · TerraNode"
description: "Importe shapefiles, GeoPackages e imagens, ou sincronize do ArcGIS. Estilize vetores e rasters uma vez e todo projeto de campo recebe o mesmo mapa."
recurso: "Catálogos"
h1: "Seus dados prontos para qualquer projeto."
subtitulo: "Importe uma vez, use em todos. Estilize à mão ou com IA."
ordem: 1
draft: false

secoes:
  - id: importar
    eyebrow: "IMPORTAÇÃO"
    titulo: "Traga o que você já tem"
    itens:
      - titulo: "Arraste e solte arquivos de até 2 GB."
        texto: "Shapefile, GeoPackage, GeoJSON, FlatGeobuf, File Geodatabase, MapInfo, CSV com coordenadas, GeoTIFF, IMG e VRT, compactados ou não. Se os dados estão na nuvem, importe direto de um bucket S3, GCS ou similar."
      - titulo: "Um arquivo, várias camadas."
        texto: "Um GeoPackage com doze camadas vira doze camadas no catálogo. O TerraNode processa cada uma separadamente, então um erro em uma não trava as outras."
      - titulo: "Progresso ao vivo."
        texto: "Cada etapa aparece na tela enquanto acontece, sem recarregar a página."
      - titulo: "Rasters que abrem rápido."
        texto: "O TerraNode converte cada raster para Cloud Optimized GeoTIFF, que o mapa carrega por partes. As estatísticas de banda saem do arquivo original inteiro, não de uma amostra."
      - titulo: "Vem do ArcGIS?"
        texto: "Sincronize camadas vetoriais do seu portal e a simbologia vem junto. Image Services e rasters do portal entram em um passo."

  - id: estilo
    eyebrow: "ESTILO"
    titulo: "A mesma aparência em todo projeto"
    itens:
      - titulo: "Estilize no catálogo e todo projeto herda."
        texto: "Se um projeto precisar, ele pode dar à camada um estilo próprio."
      - titulo: "Quatro tipos de estilo."
        texto: "Símbolo único, categorias por valor, classes graduadas e rampas contínuas. As classes graduadas usam intervalos iguais, quantis ou quebras naturais."
      - titulo: "Categorias com os valores reais."
        texto: "O editor mostra só os campos que dá para classificar e monta as categorias com os valores que existem na camada. Enquanto você ajusta as quebras, ele mostra quantas feições caem em cada classe."
      - titulo: "Prévia no mapa real."
        texto: "Cada ajuste aparece na hora."
      - titulo: "Salve e reutilize."
        texto: "Use Carregar para aplicar um estilo salvo a qualquer camada compatível. Antes de editar um estilo, você vê quantas camadas dependem dele."
      - titulo: "Validação antes de salvar."
        texto: "O TerraNode confere cada cor e cada tamanho. Feições sem valor recebem uma aparência padrão que você escolhe."

  - id: rasters
    eyebrow: "IMAGENS E ELEVAÇÃO"
    titulo: "Rasters"
    itens:
      - titulo: "Cor certa na primeira abertura."
        texto: "Imagens RGB abrem em cor verdadeira. Rasters de banda única, como elevação e índices, abrem com uma rampa ajustada ao mínimo e ao máximo dos dados."
      - titulo: "Cinco jeitos de classificar."
        texto: "Valores exatos, intervalos, rampas contínuas ou composição RGB, com rótulos, opacidade e brilho."
      - titulo: "NoData do seu jeito."
        texto: "Defina um ou mais valores sem dado e como eles aparecem. Bordas e lacunas deixam de virar ruído no mapa."

destaque:
  id: estilo-com-ia
  eyebrow: "LINGUAGEM NATURAL"
  titulo: "Estilo com IA"
  texto: "Escreva o estilo que você quer e o TerraNode monta o rascunho no editor. Se o pedido for ambíguo ou impossível, ele diz por quê."
  nota: "O modelo recebe só os nomes dos campos e um resumo do campo usado. Nunca a base inteira."
  video:
    src: "/recursos/catalogos-estilo-ia.mp4"
    poster: "/recursos/catalogos-estilo-ia.jpg"
    legenda: "Gravação do TerraNode: o pedido \"colorir os cd_uf utilizando uma rampa de cores verdes\" vira um estilo por categorias nos estados do Brasil, que depois é ajustado no editor."
    capitulos:
      - inicio: 0
        titulo: "Escreva o que você quer"
        texto: "Como \"círculos proporcionais à população\" ou \"lotes coloridos por uso do solo\"."
      - inicio: 6.5
        titulo: "O TerraNode monta o rascunho"
        texto: "Ele escolhe o campo, lê um resumo dos valores e monta o estilo no editor."
      - inicio: 12.5
        titulo: "Você ajusta e salva"
        texto: "Nada muda até clicar em Salvar estilo."

complemento:
  eyebrow: "PRONTOS PARA USAR"
  titulo: "Catálogos públicos"
  texto: "O TerraNode mantém catálogos de referência, como mapas base e limites oficiais. Use nos seus projetos sem importar nada."

fechamento:
  titulo: "Importe e estilize uma vez."
  texto: "Lançamento em breve. Entre na lista para ser avisado, ou candidate-se a early tester e ajude a definir o que entra primeiro."
  pontos:
    - "Importe shapefiles, GeoPackages e imagens, ou sincronize do ArcGIS."
    - "Estilize vetores e rasters uma vez, com prévia ao vivo ou pedindo em linguagem natural para a IA."
    - "Todo projeto recebe o mesmo mapa."
---
