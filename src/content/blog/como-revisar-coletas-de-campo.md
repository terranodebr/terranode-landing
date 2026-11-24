---
title: "Como revisar coletas de campo antes de entregar os dados · TerraNode"
description: "Ligue a revisão no projeto, aprove ou rejeite cada coleta com comentário na aba Coletas e saiba o que está validado antes de exportar."
h1: "Quem confere o que veio do campo"
subtitulo: "A revisão de coletas no TerraNode, da regra que você liga no projeto até a última coleta validada."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-10
draft: false
capa:
  src: "../../assets/blog/como-revisar-coletas-de-campo/novo-projeto-regras-de-coleta.webp"
  alt: "Passo Detalhes do assistente Novo projeto, com o bloco Regras de coleta e a opção Exigir revisão dos pontos"
recursos: [aplicativo, formularios]
---

Toda campanha de campo termina com alguém conferindo o que chegou, e sempre aparece alguma coisa: a foto do poste que saiu escura, o código de amostra repetido, o ponto que caiu do outro lado da rua.

Em muitas equipes, essa conferência acontece fora do sistema. Alguém abre uma planilha, cria uma coluna "ok" e vai marcando. Os problemas viram mensagens num grupo. Três semanas depois, o cliente pergunta quais pontos foram conferidos, e ninguém sabe responder sem refazer o trabalho.

No TerraNode, a conferência faz parte do projeto. Cada coleta espera uma decisão, um revisor aprova ou rejeita com um comentário, e a decisão fica guardada junto da coleta.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## Antes da campanha, ligue a regra

A revisão é uma escolha de cada projeto. No assistente **Novo projeto**, o passo **Detalhes** tem um bloco chamado **Regras de coleta**, com a opção **Exigir revisão dos pontos**. Com ela ligada, toda coleta nova chega como **Aguardando revisão**.

Dá para ligar a regra depois, em **Editar detalhes**, mas as coletas recebidas antes disso ficam fora da conta da revisão. Se o contrato pede dado conferido, ligue a regra já na criação do projeto.

## Escolha quem revisa

No passo **Equipe**, cada pessoa recebe um papel no projeto. Quem tem o papel de **Revisor** pode decidir as coletas dos outros, e os gestores do projeto também.

Ninguém revisa a própria coleta, e isso muda a montagem da equipe. Se o gestor do projeto também vai a campo, outra pessoa precisa conferir as coletas dele. Uma equipe pequena precisa de pelo menos duas pessoas com permissão de revisar.

O revisor recebe todos os formulários do projeto no app. Assim ele pode ir a campo e conferir um ponto com os próprios olhos quando a foto não basta.

## A coleta chega e entra na fila

O coletor toca em **Enviar**, e a resposta sobe sozinha assim que o celular encontra conexão. No painel web, a aba **Visão Geral** ganha um cartão chamado **Revisão**, que divide as coletas em **Validadas**, **Em revisão** e **Rejeitadas**. Enquanto houver coleta esperando, o cartão mostra o link **Revisar**, que abre a aba **Coletas** já filtrada na fila.

A aba **Coletas** lista as respostas da mais recente para a mais antiga. Você busca pelo número da coleta ou pelo nome do coletor e filtra por estado, por formulário e por pessoa.

O que mais atrasa uma revisão são as mídias. As respostas sobem sozinhas, mas as fotos, os vídeos e os áudios só sobem quando o coletor toca em **Enviar dados** no app. Uma coleta pode estar na fila com a foto ainda marcada como aguardando envio, e não dá para julgar uma foto que não chegou. Combine com a equipe de tocar em **Enviar dados** no Wi-Fi, no fim de cada dia.

## Aprovar, rejeitar, reabrir

Ao abrir uma coleta, você vê as respostas, as mídias que já chegaram e o histórico de revisão. Você aprova, ou rejeita e escreve um comentário.

O comentário é a parte que mais ajuda quem vem depois. "Rejeitado" não diz nada. "Placa ilegível na foto 2, refazer de frente e sem sombra" diz o que precisa ser feito no retorno ao ponto.

Num dia bom, a maioria das coletas está certa, e você pode selecionar várias e decidir todas de uma vez. Se aprovar uma por engano, é só reabrir, e ela volta para a fila.

Duas pessoas podem revisar ao mesmo tempo. Se alguém decidir a mesma coleta enquanto você olha para ela, o painel recarrega o estado atual em vez de gravar a sua decisão por cima.

## O que a rejeição não faz

Uma coleta rejeitada não volta para o celular do coletor para ser corrigida. Depois que a sessão de campo é encerrada, a coleta não muda mais no aparelho. Hoje a decisão aparece no painel web, e não no app.

A rejeição só marca a coleta e guarda o motivo. Refazer o ponto é uma coleta nova, com um número novo, e cabe ao gestor avisar a equipe do que precisa de retorno. O filtro por estado na aba **Coletas** dá a lista pronta das rejeitadas, com o comentário de cada uma.

## No fim, feche a conta

Quando a campanha termina, o gestor usa **Concluir projeto**. A janela avisa quantas coletas ainda aguardam revisão e quantas continuam presas nos aparelhos. O aviso não impede a conclusão, e a revisão continua disponível com o projeto concluído, então dá para encerrar o campo e terminar a conferência depois.

A exportação leva todas as coletas, qualquer que seja o estado. Cada uma sai com uma coluna que diz o estado da revisão, então quem recebe o arquivo consegue separar as validadas das outras.

## Para a próxima campanha

Ligue **Exigir revisão dos pontos** antes da primeira coleta. Tenha um revisor que não seja o próprio coletor. Peça à equipe para tocar em **Enviar dados** todo fim de dia, porque sem as mídias não há o que conferir. Escreva comentários que digam o que refazer. E trate cada rejeição como um retorno ao ponto, que vira uma coleta nova.

Os cartões, os filtros e as regras de quem pode revisar estão na documentação de [acompanhamento do projeto](https://docs.terranode.com.br/projetos/acompanhamento/) e de [equipe do projeto](https://docs.terranode.com.br/projetos/equipe/). Para o lado do coletor, com os estados de envio de cada coleta, leia [como coletar dados em campo sem internet](/blog/como-coletar-dados-em-campo-sem-internet/).
