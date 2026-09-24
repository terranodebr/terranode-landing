---
title: "Construtor de formulários para coleta em campo · TerraNode"
description: "Monte formulários de campo arrastando fotos, áudio, assinatura, escolhas, números, datas e geometria. Ou gere os campos a partir das colunas de uma camada do seu catálogo."
recurso: "Formulários"
h1: "Monte o formulário arrastando os campos. Teste como no app antes de publicar."
subtitulo: "Treze tipos de campo, cada um com as regras do seu levantamento. Comece do zero ou gere as perguntas a partir das colunas de uma camada que você já tem."
ordem: 2
draft: true

secoes:
  - id: montar
    eyebrow: "MONTAGEM"
    titulo: "Arraste, solte e ajuste"
    itens:
      - titulo: "Paleta, formulário e propriedades na mesma tela."
        texto: "Você vê tudo o que o coletor vai responder enquanto monta."
      - titulo: "Arraste ou clique."
        texto: "Arraste um campo da paleta para a posição que quiser no formulário, ou clique nele para adicioná-lo no fim."
      - titulo: "Reordene com o mouse ou o teclado."
        texto: "Arraste o campo para outro lugar, ou foque a alça e use as setas. Cada mudança de posição é anunciada ao leitor de tela."
      - titulo: "Trocar o tipo não apaga nada por engano."
        texto: "Se o campo já tem propriedades ajustadas, o TerraNode avisa o que vai se perder antes de trocar."
      - titulo: "Nenhum campo sem pergunta."
        texto: "Um campo sem rótulo bloqueia a publicação, e o editor mostra qual é."

  - id: campos
    eyebrow: "CAMPOS"
    titulo: "Cada campo com as regras do levantamento"
    itens:
      - titulo: "Selecione o campo e ajuste ao lado."
        texto: "O painel mostra o rótulo, se a resposta é obrigatória e as propriedades daquele tipo. Cada ajuste aparece no formulário na hora."
      - titulo: "Fotos com a posição gravada."
        texto: "Defina o mínimo e o máximo de fotos, se elas vêm da câmera, da galeria ou das duas, e exija a geotag: cada foto grava as coordenadas de onde foi tirada."
      - titulo: "Vídeo na qualidade certa."
        texto: "Duração máxima, fonte e qualidade em 480p, 720p ou 1080p."
      - titulo: "Áudio com transcrição."
        texto: "Limite a duração e ative a transcrição automática, que gera o texto do áudio ao sincronizar."
      - titulo: "Assinatura com nome e horário."
        texto: "Traçada com o dedo ou a caneta. O formulário pode pedir o nome de quem assina e gravar a data e a hora junto com o traço."
      - titulo: "Escolhas que crescem em campo."
        texto: "Múltipla escolha com as opções que você define. Se você permitir, o coletor cadastra uma opção nova, e ela pode passar por aprovação antes de valer."
      - titulo: "Números com limite."
        texto: "Número aberto com unidade, mínimo, máximo e casas decimais. Quantitativo com passo e valor inicial."
      - titulo: "Texto validado."
        texto: "Limite de caracteres, texto de apoio e validação de e-mail ou por expressão regular."
      - titulo: "Datas dentro do prazo."
        texto: "Limite o intervalo aceito e preencha com a data de hoje, ou com a data e a hora atuais, por padrão."
      - titulo: "Uma geometria por formulário."
        texto: "Ponto, linha ou polígono, a precisão mínima do GPS e se o coletor pode desenhar direto no mapa."

  - id: tipos
    eyebrow: "TIPOS DE CAMPO"
    titulo: "Treze tipos de campo, em seis grupos"
    itens:
      - titulo: "Mídia"
        texto: "Fotos · Vídeos · Áudios · Assinatura"
      - titulo: "Texto"
        texto: "Texto curto · Texto longo"
      - titulo: "Escolha"
        texto: "Booleano · Múltipla escolha"
      - titulo: "Numérico"
        texto: "Numérico aberto · Quantitativo"
      - titulo: "Data"
        texto: "Data · Data e hora"
      - titulo: "Geometria"
        texto: "Pontos, linhas e polígonos"

destaque:
  id: pre-visualizacao
  eyebrow: "PRÉ-VISUALIZAÇÃO"
  titulo: "Responda como no app"
  texto: "Abra o formulário do jeito que o aplicativo de campo mostra e responda cada pergunta, antes de publicar. Só câmera, microfone e GPS ficam de fora, porque dependem do aparelho."
  video:
    src: "/recursos/formularios-editor.mp4"
    poster: "/recursos/formularios-editor.jpg"
    # Janela em (58, 39)–(1513, 1040) com cantos de raio ~26: 2 px para dentro e sem
    # os cantos de baixo, que o palco corta retos.
    janela: { quadro: [1572, 1080], x: 60, y: 41, largura: 1452, altura: 970, raio: 24 }
    legenda: "Gravação do TerraNode: o Formulário de Inspeção recebe, arrastados da paleta, uma geometria, uma observação por áudio, uma assinatura, a data e hora do registro e fotos da estrutura. Cada campo é ajustado no painel de propriedades e, no fim, o formulário é aberto na pré-visualização do aplicativo."
    capitulos:
      - inicio: 0
        titulo: "Arraste os campos"
        texto: "Geometria, áudio, assinatura, data e fotos entram na ordem que você quiser."
      - inicio: 5.5
        titulo: "Ajuste cada um"
        texto: "Duração do áudio, nome de quem assina, fonte das fotos e geotag, no painel ao lado."
      - inicio: 25.5
        titulo: "Veja como o coletor vê"
        texto: "A pré-visualização monta o formulário com a mesma lista de campos do editor."

complemento:
  eyebrow: "A PARTIR DO CATÁLOGO"
  titulo: "Comece de uma camada que você já tem"
  texto: "Escolha uma camada vetorial da sua organização e o TerraNode gera um campo para cada coluna. Colunas de controle, como OBJECTID e Shape_Area, ficam de fora, e a geometria entra no tipo da camada. Depois é só revisar no editor."

fechamento:
  titulo: "Monte o formulário do seu levantamento."
  texto: "Lançamento em breve. Entre na lista para ser avisado, ou candidate-se a early tester e ajude a definir o que entra primeiro."
  pontos:
    - "Arraste treze tipos de campo e ajuste as regras de cada um."
    - "Gere os campos a partir de uma camada do catálogo."
    - "Responda o formulário como no app antes de publicar."
---
