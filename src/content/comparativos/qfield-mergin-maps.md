---
title: "Alternativa ao QField e ao Mergin Maps · TerraNode"
description: "Monte o formulário no navegador, sem QGIS, e valide cada ponto antes de exportar."
concorrente: "QField / Mergin Maps"
h1: "TerraNode vs QField e Mergin Maps"
subtitulo: "Quem conhece o levantamento monta o formulário no navegador, sem abrir o QGIS, e cada ponto passa por um revisor antes de chegar lá."
ordem: 3
draft: false
setor: "meio-ambiente"

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
    terranode: "Sim"
    concorrente: "Sim"
  - criterio: "GNSS externo"
    terranode: "Sim"
    concorrente: "Sim"
  - criterio: "Revisão com validar, rejeitar e retorno ao coletor"
    terranode: "Nativa, em fila"
    concorrente: "Não é um fluxo pronto. A revisão acontece no QGIS"
  - criterio: "Integração com QGIS e PostGIS"
    terranode: "Via exportação (Shapefile, GeoJSON)"
    concorrente: "Nativa"
  - criterio: "Suporte"
    terranode: "Em português, direto com o time do produto"
    concorrente: "Comunidade no plano gratuito. Tickets ou SLA nos planos pagos"

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
  tela:
    src: "../../assets/concorrentes/qfield-mergin-maps.webp"
    alt: "QGIS: propriedades da camada, com o formulário de atributos e as restrições de um campo"
    credito:
      texto: "Documentação do Mergin Maps"
      url: "https://merginmaps.com/docs/layer/constraints/"
    licenca:
      nome: "CC BY 4.0"
      url: "https://creativecommons.org/licenses/by/4.0/"

diferencas:
  - titulo: "O formulário não depende do analista GIS"
    texto: "O formulário se monta arrastando campos, com regras de obrigatoriedade e precisão mínima. No QField e no Mergin Maps, essas regras ficam nos widgets de edição das propriedades da camada, no QGIS."
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
    a: "O preço ainda não foi divulgado. Quem entra na lista de espera usa o TerraNode antes do lançamento."

fechamento:
  titulo: "Deixe o QGIS para a análise. A coleta começa no navegador."
  texto: "Quem conhece o levantamento monta o formulário, e o QGIS recebe só o dado validado. Entre na lista de espera e compare no seu próximo campo."

fontes:
  - label: "QFieldCloud, preços"
    url: "https://qfield.cloud/pricing"
  - label: "Mergin Maps, preços"
    url: "https://merginmaps.com/pricing"
consultadoEm: "23/10/2026"
---
