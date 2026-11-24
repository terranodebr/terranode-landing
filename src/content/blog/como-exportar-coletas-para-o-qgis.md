---
title: "Como exportar as coletas de campo e abrir no QGIS · TerraNode"
description: "Exporte o projeto do TerraNode em um GeoPackage com coletas, trajetos e fotos, e abra tudo no QGIS para montar o mapa e o relatório."
h1: "Do campo ao QGIS"
subtitulo: "O que conferir antes de exportar um projeto, o que vem dentro do arquivo e como abrir as coletas no QGIS."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-13
draft: false
recursos: [aplicativo, catalogos]
---

A campanha acabou. A equipe voltou, os celulares estão na mesa, e o trabalho muda de mãos. Agora alguém precisa transformar algumas centenas de coletas em um mapa, um relatório e uma entrega para o cliente.

É nessa passagem que os dados costumam se espalhar. As respostas saem em uma planilha, as fotos ficam em uma pasta com nomes como `IMG_4032.jpg`, e o trajeto da equipe fica no aparelho de cada um. Juntar tudo de novo vira um trabalho à parte.

O TerraNode entrega o projeto em um arquivo só. Dentro dele há um GeoPackage com as coletas, os trajetos e o limite do projeto, e uma pasta com as mídias organizadas por coleta.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## Antes de exportar, veja o que ainda está no campo

A exportação leva o que já chegou ao servidor. O que ainda está em um celular fica de fora, e é melhor descobrir isso antes de montar o relatório.

Na **Visão Geral** do projeto, o cartão **Equipe agora** mostra, para cada pessoa, quantas coletas ainda estão no aparelho. Se alguém aparece com coletas pendentes, peça para abrir o app com conexão.

As mídias pedem atenção separada. As respostas sobem sozinhas, mas as fotos, os vídeos e os áudios só sobem quando o coletor toca em **Enviar dados**. Uma foto que ainda não chegou não entra no arquivo. No mapa do projeto, cada coleta mostra quantas mídias tem e quantas aguardam envio.

Se a campanha terminou de vez, use **Concluir projeto**. A janela resume quantas coletas chegaram e o que ainda está pendente. Concluir não é obrigatório para exportar. Você pode exportar um projeto em andamento quantas vezes quiser, por exemplo para uma entrega parcial.

## Peça o arquivo

Na **Visão Geral**, clique em **Exportar dados**. O TerraNode abre a aba **Exportações**, onde você acompanha a geração. O tempo depende do volume de mídias. Pode fechar a página, porque um e-mail avisa quando o arquivo estiver pronto.

O download fica disponível por 7 dias. Se você pedir de novo sem que nada tenha mudado no projeto, o TerraNode devolve a exportação que já existe.

Podem exportar os gestores e os editores da organização e quem gerencia o projeto. Um projeto em rascunho não pode ser exportado.

## O que vem dentro do ZIP

Extraia o arquivo inteiro em uma pasta e mantenha a estrutura.

Dentro há um arquivo `.gpkg`, com o nome do projeto, e uma pasta chamada `midia`, com uma subpasta para cada coleta. O nome da subpasta é o número da coleta, como `POSTE-00139`, o mesmo que aparece no painel e no app. Para achar as fotos de um ponto, você não precisa abrir nada além do gerenciador de arquivos.

## Abra no QGIS

Arraste o `.gpkg` para o QGIS. Ele pergunta quais camadas você quer abrir:

- **Uma camada para cada formulário**, com o nome começando por `form_`. Cada linha é uma coleta, com o ponto e as respostas.
- **`midia`**, com um ponto para cada foto, vídeo ou áudio que tem posição.
- **`tracks`**, com uma linha para cada sessão de campo.
- **`track_pontos`**, com cada posição registrada ao longo do trajeto.
- **`limite`**, com a área de cobertura do projeto.

Na tabela de atributos de um formulário, as primeiras colunas valem para qualquer coleta. `numero` é o número da coleta, `coletor` é quem fez, `inicio` e `fim` marcam o tempo de preenchimento, e `estado_revisao` diz o que a revisão decidiu. Depois vem uma coluna para cada campo do formulário, com o rótulo como apelido.

As datas e as horas saem em UTC, três horas à frente do horário de Brasília, então uma coleta feita às 22h aparece no dia seguinte. Converta antes de montar uma tabela por dia de campo.

As colunas de foto guardam o caminho do arquivo dentro do ZIP, como `midia/POSTE-00139/fotos_1.jpg`. Com a pasta extraída ao lado do `.gpkg`, esse caminho leva direto à imagem.

## Separe o que foi validado

A exportação não tem filtros. Ela traz todas as coletas que não foram excluídas, aprovadas ou não. Se o projeto exige revisão, use a coluna `estado_revisao` para filtrar a camada no QGIS e entregar só o que foi validado.

Também não existe exportação direta em CSV ou em Shapefile. Com a camada aberta no QGIS, o menu **Exportar** salva as feições no formato que o cliente pedir.

## E as camadas do catálogo

O arquivo traz o que veio do campo. As camadas de referência do catálogo, como a rede ou os limites de propriedade, não entram nele. O QGIS consegue ler essas camadas direto do TerraNode, por um padrão aberto de leitura de feições, com um token de acesso. O passo a passo está na documentação de [uso dos dados em outras ferramentas](https://docs.terranode.com.br/catalogos/usar-em-outras-ferramentas/).

## A passagem em uma tarde

Antes de exportar, confira o cartão **Equipe agora** e peça **Enviar dados** a quem tem mídia pendente. Peça o arquivo em **Exportar dados**, extraia o ZIP inteiro e arraste o `.gpkg` para o QGIS. Lembre-se das horas em UTC e do filtro por `estado_revisao`.

O que cada cartão mostra e as regras da exportação estão em [acompanhar o projeto](https://docs.terranode.com.br/projetos/acompanhamento/). Se o seu projeto ainda não usa revisão, leia [quem confere o que veio do campo](/blog/como-revisar-coletas-de-campo/).
