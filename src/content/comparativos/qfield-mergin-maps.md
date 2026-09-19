---
title: "TerraNode vs QField e Mergin Maps"
description: "Monte o formulário no navegador, sem QGIS, e valide cada ponto antes de exportar."
concorrente: "QField / Mergin Maps"
h1: "TerraNode vs QField e Mergin Maps"
subtitulo: "Com QField e Mergin Maps, o projeto nasce no QGIS. Com o TerraNode, nasce no navegador, e quem monta o formulário é quem conhece o levantamento."
ordem: 3
draft: true

resumo:
  concorrente: "Se sua equipe domina QGIS, quer código aberto ou precisa editar camadas complexas e PostGIS em campo."
  terranode: "Se quem monta o formulário não é analista GIS e se o dado precisa ser validado antes de chegar ao QGIS."
  diferenca: "Nos dois, o formulário é configurado nas propriedades da camada no QGIS. No TerraNode, você arrasta campos ou descreve o levantamento para a IA."

tabela:
  - criterio: "Onde o projeto é montado"
    terranode: "No navegador"
    concorrente: "No QGIS desktop"
  - criterio: "Código aberto"
    terranode: "Não"
    concorrente: "Sim, com versão auto-hospedada gratuita"
  - criterio: "Coleta offline"
    terranode: "Sim, 100%"
    concorrente: "Sim"
  - criterio: "GNSS externo"
    terranode: "Sim, ±3 cm"
    concorrente: "Sim"
  - criterio: "Revisão com validar, rejeitar e retorno ao coletor"
    terranode: "Nativa, em fila"
    concorrente: "Não é um fluxo pronto. A revisão acontece no QGIS"
  - criterio: "Integração com QGIS e PostGIS"
    terranode: "Via exportação (Shapefile, GeoJSON)"
    concorrente: "Nativa"
  - criterio: "Preço da nuvem"
    terranode: "Ainda não divulgado"
    concorrente: "QFieldCloud a partir de €14 por usuário/mês. Mergin Maps a partir de €15,8 por colaborador/mês. Ambos têm plano gratuito limitado"
  - criterio: "Idioma e suporte"
    terranode: "Português, direto com o time do produto"
    concorrente: "Comunidade e suporte pago em inglês"

fluxo:
  titulo: "Com QField ou Mergin Maps"
  passos:
    - icone: "desktop"
      titulo: "Monte o projeto no QGIS"
      detalhe: "Camadas, formulário e widgets de edição nas propriedades da camada."
    - icone: "nuvem"
      titulo: "Sincronize pela nuvem"
      detalhe: "QFieldCloud ou Mergin Maps levam o projeto aos aparelhos."
    - icone: "app"
      titulo: "Colete no app"
      detalhe: "QField ou Mergin Maps, com o projeto do QGIS."
    - icone: "desktop"
      titulo: "Revise no QGIS"
      detalhe: "A conferência dos pontos volta para o desktop."

diferencas:
  - titulo: "O formulário não depende do analista GIS"
    texto: "O engenheiro, o agrônomo ou o fiscal monta o formulário arrastando campos, com regras de obrigatoriedade e precisão mínima. Nada de widgets de edição nas propriedades da camada."
  - titulo: "Revisão antes do QGIS"
    texto: "Cada ponto passa por um revisor no navegador. Só o dado validado sai na exportação, e o QGIS recebe uma base limpa."
  - titulo: "Equipe e produção à vista"
    texto: "Cada formulário é atribuído a coletores específicos, e o painel mostra quanto cada pessoa coletou."

ondeMelhor:
  titulo: "Onde QField e Mergin Maps vão melhor"
  texto: "São código aberto, têm plano gratuito e podem rodar no seu próprio servidor. Editam qualquer camada que o QGIS abre, inclusive PostGIS, com simbologia e expressões do QGIS. Se o seu time já trabalha assim, não há motivo para trocar."

faq:
  - q: "O TerraNode substitui o QGIS?"
    a: "Não. Ele substitui a etapa de coleta e revisão. O dado validado segue para o QGIS em Shapefile ou GeoJSON."
    badge: "Mais perguntada"
  - q: "Qual a diferença entre QField e TerraNode?"
    a: "O QField leva para o campo um projeto feito no QGIS. O TerraNode monta o formulário no navegador e adiciona uma fila de revisão."
  - q: "O TerraNode é gratuito como o QField?"
    a: "O preço ainda não foi divulgado. Early testers têm acesso antecipado."

fechamento:
  titulo: "Deixe o QGIS para a análise. A coleta começa no navegador."
  texto: "Quem conhece o levantamento monta o formulário, e o QGIS recebe só o dado validado. Entre como early tester e compare no seu próximo campo."

fontes:
  - label: "QFieldCloud, preços"
    url: "https://qfield.cloud/pricing"
  - label: "Mergin Maps, preços"
    url: "https://merginmaps.com/pricing"
consultadoEm: "18/09/2026"
---
