---
title: "Formatos que o TerraNode importa: Shapefile, GeoPackage, planilhas e rasters · TerraNode"
description: "O que acontece entre soltar um arquivo no catálogo e ver a camada no mapa: como o TerraNode encontra cada camada, acha coordenadas em planilhas e prepara vetores e rasters."
h1: "Do arquivo à camada: como o TerraNode lê os seus dados"
subtitulo: "Shapefiles dentro de zips, GeoPackages com várias tabelas, planilhas com colunas de latitude e imagens de satélite. O que o TerraNode faz com cada um."
categoria: engenharia
autor: george-silva
publicadoEm: 2026-11-09
draft: true
recursos: [catalogos, integracoes]
# PRINT PENDENTE (capa): janela "Enviar dados para o catálogo" com um .zip gerando vários itens em estados diferentes, em um catálogo com nome real.
---

Quem trabalha com dados geográficos quase nunca escolhe o formato em que eles chegam. O limite das propriedades vem em Shapefile, baixado de um órgão estadual. A rede de distribuição sai do ArcGIS como File Geodatabase. O inventário está em uma planilha do Excel, e a ortofoto chegou em GeoTIFF.

Antes de qualquer coleta, alguém precisa juntar tudo isso em um mapa só. Na maioria das equipes, esse alguém passa a manhã no QGIS convertendo arquivos, reprojetando camadas e renomeando colunas.

No TerraNode, a ideia é mandar o arquivo como ele está. Este texto conta o que acontece entre o momento em que o arquivo cai no catálogo e o momento em que a camada aparece no mapa, e mostra os poucos pontos em que o TerraNode ainda precisa da sua ajuda.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## Primeiro, descobrir o que tem dentro

Um arquivo raramente traz uma camada só. Um GeoPackage pode ter doze tabelas. Um `.zip` baixado de um portal público pode trazer pastas e subpastas com Shapefiles, um GeoTIFF e um PDF de metadados no meio.

O TerraNode começa abrindo o pacote. Ele percorre o `.zip` inteiro, inclusive as subpastas, e separa os arquivos que sabe ler. São Shapefile, GeoPackage, GeoJSON, FlatGeobuf, MapInfo, File Geodatabase, CSV, planilhas do Excel e do LibreOffice, GeoTIFF e ERDAS Imagine. Uma pasta `.gdb` conta como um conjunto de dados só, do mesmo jeito que o ArcGIS a trata. O PDF fica de fora.

A extensão só diz onde olhar. Quem decide o que existe dentro de cada arquivo é o GDAL, a biblioteca de leitura de dados geográficos que também está por trás do QGIS. O TerraNode abre cada arquivo com o GDAL e pergunta quantas camadas há ali e de que tipo cada uma é.

A resposta vira uma lista de itens. Cada camada vetorial, tabela, aba de planilha ou raster é um item, com processamento próprio. Um zip com dois Shapefiles e um GeoTIFF vira três itens, e um GeoPackage com doze tabelas vira doze. Essa separação é o que torna seguro mandar um zip grande, porque um Shapefile com defeito não derruba os outros. O envio só falha inteiro quando nada lá dentro pôde ser lido.

Alguns formatos precisam ir dentro de um `.zip`. Shapefile, MapInfo e File Geodatabase são vários arquivos que só funcionam juntos, e o envio pela web recusa um `.shp` solto com a mensagem **Tipo de arquivo não suportado**. GeoPackage, GeoJSON, FlatGeobuf, CSV, planilhas e rasters podem ir soltos ou compactados.

## Planilhas, o formato que ninguém chama de geográfico

Muito dado de campo mora em planilha. A lista de poços com latitude e longitude, o cadastro de clientes com a coordenada do medidor, o inventário que alguém digitou depois de uma campanha. Uma planilha não tem sistema de referência nem geometria. Tem colunas, e o trabalho do TerraNode é descobrir quais delas são coordenadas.

Em `.xlsx` e `.ods`, cada aba vira uma camada separada, sempre com a primeira linha como cabeçalho. Uma aba vazia, ou só com o cabeçalho, é ignorada. Nas outras, a busca pelas coordenadas é tolerante. O TerraNode ignora acentos e maiúsculas e reconhece o nome mesmo com alguma coisa antes ou depois, então "Latitude (WGS84)" e "Posição Lng" funcionam. Uma coordenada digitada com vírgula decimal, como `-46,5`, também vira número.

Com as duas colunas encontradas, cada linha vira um ponto em WGS84. Uma linha com a coordenada vazia, com um texto como `n/d` ou com um valor impossível, como latitude 200, fica sem ponto. O resto da aba entra normalmente.

O CSV é mais rígido. As colunas precisam se chamar exatamente `longitude`, `lon`, `long`, `lng` ou `x`, e `latitude`, `lat` ou `y`, com maiúsculas ou minúsculas. Se a sua planilha tem nomes como "Lat. (graus)", envie o `.xlsx` em vez de exportar um CSV.

E quando não há coordenadas? A aba vira uma fonte **Sem geometria**. Ela não aparece no mapa, mas tem tabela de atributos e pode servir de base para um formulário. O Excel antigo, o `.xls`, fica de fora. Abra no Excel ou no LibreOffice e salve como `.xlsx`.

Se a planilha mora no Google Sheets, a [integração](https://docs.terranode.com.br/integracoes/google-sheets/) traz as abas direto, sem baixar arquivo, com o mesmo detector de coordenadas. Ali o TerraNode lê também o tipo de cada célula, então datas continuam datas e números continuam números. Se ele escolher a coluna errada, você indica qual é a latitude e qual é a longitude.

## O que muda nos dados no caminho

Achar a camada é metade do trabalho. A outra metade é deixar todas as camadas do catálogo falando a mesma língua, para que se sobreponham no mapa e no celular sem surpresa.

A primeira exigência é o sistema de referência. Todo vetor e todo raster precisa declarar um sistema ligado à Terra. Pode ser SIRGAS 2000 em UTM, SAD69 ou WGS84. O TerraNode converte os vetores para WGS84, e você não precisa reprojetar nada antes. O que ele não consegue é adivinhar. Um Shapefile sem o `.prj` falha, e um arquivo em um sistema local de engenharia, sem referência à Terra, também.

Depois vem a limpeza dos vetores. Geometrias inválidas, como um polígono que cruza a si mesmo, são corrigidas. Pontos, linhas e polígonos passam a ser do tipo "multi", que aceita várias partes na mesma feição. Valores de altitude Z e medidas M ficam de fora, e a camada entra em duas dimensões. Os nomes das colunas ficam em minúsculas, com apóstrofo, hífen e `#` trocados por `_`. Acentos e espaços nos nomes continuam.

Os acentos dentro dos dados pedem um cuidado especial nos Shapefiles. Muitos arquivos gerados no Brasil não declaram a codificação do texto. Nesse caso, o TerraNode tenta ler como UTF-8 e, se não der, tenta de novo como ISO-8859-1, a codificação que boa parte dos programas antigos usava.

Os rasters seguem outro caminho. O TerraNode guarda cada um como Cloud Optimized GeoTIFF, sem perda de qualidade, em um formato que o mapa carrega por partes. As estatísticas de cada banda saem do arquivo inteiro, não de uma amostra. Na primeira abertura, uma imagem RGB abre em cor verdadeira, e uma elevação abre com uma rampa entre o mínimo e o máximo.

<!-- PRINT PENDENTE: aba Fontes de dados de um catálogo com um Shapefile, uma aba de planilha Sem geometria e um GeoTIFF lado a lado. -->

## O que ainda depende de você

Quase tudo acontece sem você ver. Mesmo assim, três coisas ainda dependem de quem envia. A primeira é o sistema de referência declarado, com o `.prj` dentro do zip do Shapefile. A segunda é compactar os formatos que são vários arquivos, como Shapefile, MapInfo e File Geodatabase. A terceira é usar nomes de coluna reconhecíveis para as coordenadas, principalmente em CSV.

O resto fica com o TerraNode. Ele encontra cada camada dentro do zip, separa as abas da planilha, acha as coordenadas, converte para WGS84, corrige as geometrias e prepara os rasters para o mapa. Quando um item falha, o motivo aparece na tela, e só ele precisa ser enviado de novo.

A lista completa de formatos, os limites de tamanho e os erros mais comuns estão na [documentação de importação](https://docs.terranode.com.br/catalogos/importar-dados/). Para ver o caminho completo de um arquivo até o celular, leia [como levar um Shapefile para o campo](/blog/como-levar-um-shapefile-para-o-campo/). Se os dados já estão no ArcGIS ou no Google Sheets, as [integrações](/recursos/integracoes/) trazem as camadas sem envio de arquivo. E, com a camada no catálogo, a [página de Catálogos](/recursos/catalogos/) mostra o passo seguinte, que é dar a ela um estilo.
