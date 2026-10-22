---
title: "Integração com ArcGIS, Google Sheets e Survey123 · TerraNode"
description: "Conecte o ArcGIS Online ou o ArcGIS Enterprise, abas do Google Sheets e formulários do Survey123. Os dados chegam ao campo com simbologia e sincronização agendada."
recurso: "Integrações"
h1: "Seus dados de onde já estão. O TerraNode busca no seu ArcGIS e nas suas planilhas."
subtitulo: "Conecte o portal ArcGIS Online ou Enterprise da organização, abas do Google Sheets e os formulários que você já montou no Survey123. Nada é alterado na origem."
ordem: 3
draft: true

secoes:
  - id: planilhas
    eyebrow: "GOOGLE SHEETS"
    titulo: "Uma aba vira uma camada de pontos"
    itens:
      - titulo: "Conecte sua conta Google e escolha as planilhas."
        texto: "O TerraNode só enxerga as planilhas que você escolhe no seletor do Google, inclusive as de drives compartilhados."
      - titulo: "Coordenadas detectadas automaticamente."
        texto: "As colunas de latitude e longitude são detectadas automaticamente, mas você também pode defini-las manualmente."
      - titulo: "Prévia antes de adicionar."
        texto: "O tipo de cada coluna, o total de linhas e cada linha que não pode ser importada aparecem antes de a aba virar camada."
      - titulo: "O mapa não quebra com a planilha."
        texto: "Se uma coluna some, muda de tipo ou traz uma coordenada inválida, a sincronização para e o mapa mantém os dados anteriores, com as linhas do problema apontadas."
      - titulo: "Sincronize sozinho ou na hora."
        texto: "Agende ou sincronize com um clique. Se a planilha não mudou, nada é baixado, e renomear a aba não quebra a ligação."

  - id: survey123
    eyebrow: "SURVEY123 · XLSFORM"
    titulo: "Traga o formulário que você já usa"
    itens:
      - titulo: "Envie o .xlsx do Survey123."
        texto: "O arquivo XLSForm do formulário vira um formulário do TerraNode, com as perguntas, as opções e as regras compatíveis."
      - titulo: "Perguntas"
        texto: "Texto · E-mail · Inteiro · Decimal · Intervalo · Escolha única · Múltipla escolha · Data · Data e hora · Hora · Ponto, linha e polígono · Foto · Assinatura · Áudio · Código de barras"
      - titulo: "Regras"
        texto: "Obrigatória · Condição de exibição simples · Limite numérico · Hoje e agora como padrão · Rótulo em português"
      - titulo: "Simplificado"
        texto: "Grupos achatados · Repetições removidas · Primeira geometria mantida · Notas e cálculos de fora"
      - titulo: "Um relatório do que ficou de fora."
        texto: "Tudo o que não entrou é listado depois da importação, com a expressão original citada, para você revisar no editor."
    nota: "As respostas já coletadas no Survey123 vêm pela integração ArcGIS: assine a camada hospedada do formulário e as camadas e tabelas chegam ao TerraNode. Anexos e relacionamentos ainda não."

  - id: arcgis
    eyebrow: "ARCGIS ONLINE E ENTERPRISE"
    titulo: "Seu portal ArcGIS, pronto para o campo"
    itens:
      - titulo: ""
        texto: "As camadas que vocês já mantêm no ArcGIS chegam ao TerraNode com a simbologia e viram mapa de campo, camada de projeto e ponto de partida de formulário."
      - titulo: "OAuth 2.0, sem senha."
        texto: "Registre um app OAuth no seu portal e informe o Client ID. O TerraNode usa o fluxo com PKCE e nunca pede a senha do portal."
      - titulo: "Ou uma chave de API."
        texto: "Chave de longa duração, com o escopo definido do lado da Esri. Vale para o ArcGIS Online e para o ArcGIS Enterprise 11.4 ou mais recente."
      - titulo: "Enterprise: cole a URL do portal."
        texto: "A página inicial, a raiz REST ou o endereço com barra no fim: o TerraNode normaliza o que você colar."
      - titulo: "Conectado só depois de testar."
        texto: "A credencial é verificada no portal antes de valer. Se ela expirar ou for revogada, a integração avisa e pede para reconectar."
      - titulo: "Navegue pelo conteúdo da organização."
        texto: "Busque em todo o conteúdo da organização, em ordem alfabética, ou abra uma das suas pastas."
      - titulo: "Camadas e tabelas, várias de uma vez."
        texto: "Feature Services e Map Services que aceitam consulta. Cada serviço vira um catálogo, e cada camada ou tabela, uma fonte de dados."
      - titulo: "Respostas do Survey123 também."
        texto: "A camada hospedada de um formulário do Survey123 é um Feature Service: as respostas chegam como camada e tabelas."
      - titulo: "Image Services e rasters."
        texto: "Importados uma vez, pelo download do arquivo, pela capacidade de download do serviço ou por exportImage."
      - titulo: "Camadas grandes, sem cortes."
        texto: "A leitura é paginada em ordem estável e respeita o limite de registros por consulta de cada camada."
      - titulo: "A simbologia vem junto."
        texto: "Símbolo único, valores únicos, quebras de classe, variáveis visuais, rótulos, transparência e faixa de escala viram estilo no TerraNode. O que não dá para converter é avisado, não some."
      - titulo: "Coordenadas em WGS 84."
        texto: "Os dados são reprojetados para EPSG:4326 na leitura, e o Web Mercator (102100) é reconhecido."
      - titulo: "Campos com alias e tipo."
        texto: "Nome, alias, tipo, tamanho e domínio de cada campo ficam registrados. Ao gerar o formulário, OBJECTID, GlobalID e Shape_Area ficam de fora."
      - titulo: "Agende a sincronização."
        texto: "De hora em hora, diária, semanal ou com uma expressão cron sua."
      - titulo: "Sem edição, sem download."
        texto: "Antes de cada sincronização agendada, o TerraNode compara a data da última edição da camada. Se nada mudou, a execução é pulada."
      - titulo: "Atualizada no lugar."
        texto: "Os dados novos entram de uma vez. Os projetos que usam a camada continuam funcionando, e uma falha nunca deixa o mapa vazio."
      - titulo: "Histórico de cada sincronização."
        texto: "Cada execução fica registrada com o número de feições e o erro, se houver, e o progresso aparece ao vivo. Depois de 5 falhas seguidas, o agendamento pausa."
    nota: "Credenciais guardadas criptografadas e nunca devolvidas pela API. O TerraNode só lê do portal: nada é alterado no seu ArcGIS."

  - id: portais
    eyebrow: "ONLINE OU ENTERPRISE"
    titulo: "O mesmo caminho nos dois portais"
    itens:
      - titulo: "ArcGIS Online"
        texto: "Portal em arcgis.com, já preenchido · OAuth 2.0 com PKCE · Chave de API"
      - titulo: "ArcGIS Enterprise"
        texto: "URL do seu portal · OAuth 2.0 com app registrado no portal · Chave de API a partir da versão 11.4"

complemento:
  eyebrow: "DEPOIS DA SINCRONIZAÇÃO"
  titulo: "Dado sincronizado é dado do TerraNode"
  texto: "Camadas do ArcGIS e abas do Google Sheets funcionam como as que você envia: entram nos projetos, vão no pacote offline do aplicativo e geram o formulário a partir das colunas. Como guardam uma credencial da organização, as integrações são gerenciadas pelo proprietário."

fechamento:
  titulo: "Leve para o campo o que você já mantém."
  texto: "Lançamento em breve. Entre na lista para ser avisado, ou candidate-se a early tester e ajude a definir o que entra primeiro."
  pontos:
    - "Conecte o ArcGIS Online ou o Enterprise por OAuth ou chave de API."
    - "Camadas, tabelas e rasters chegam com a simbologia."
    - "Abas do Google Sheets viram camadas de pontos."
    - "Formulários do Survey123 importados pelo .xlsx."
---
