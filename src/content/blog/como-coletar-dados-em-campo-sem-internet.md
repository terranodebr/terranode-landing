---
title: "Como coletar dados em campo sem internet · TerraNode"
description: "Um dia de campo sem sinal com o app do TerraNode no Android: o que preparar na véspera, como coletar pontos e fotos e como enviar tudo na volta."
h1: "Como coletar dados em campo sem internet"
subtitulo: "Um dia de campo do começo ao fim, da véspera com internet até as fotos enviadas na volta, no app do TerraNode para Android."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-06
draft: true
capa:
  src: "../../assets/foto-torre-campo.webp"
  alt: "Base de uma torre de transmissão com a plaqueta de número 132, em um pasto com mata ao fundo"
recursos: [aplicativo, formularios]
---

O sinal costuma acabar antes de a equipe chegar ao ponto. Em uma vistoria de linha de transmissão ou em um levantamento em área rural, o dia inteiro pode passar sem 4G. Se o trabalho depende de internet para abrir o mapa ou enviar o formulário, a equipe volta com metade do que foi buscar, ou com fotos soltas na galeria sem saber de qual ponto são.

O app do TerraNode guarda no celular tudo o que a coleta precisa e envia os dados quando a conexão volta. Para isso dar certo, algumas coisas precisam acontecer na ordem certa, e a maioria delas antes de sair do escritório.

Este guia acompanha um dia de campo da véspera até a volta. As telas são do app real, com um projeto de exemplo chamado Supressão Floripa. O guia parte de um projeto já criado. Se você ainda precisa colocar as camadas da equipe nele, comece por [como levar um Shapefile para o campo](/blog/como-levar-um-shapefile-para-o-campo/).

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## Na véspera, com internet

Tudo começa com o download. Instale o app, entre com o mesmo e-mail e senha do painel web e, na aba **Projetos**, toque em **Baixar projeto**. O download continua em segundo plano, então você pode fechar o app. Se a conexão cair no meio, ele retoma depois só com os arquivos que faltam.

O projeto está pronto para sair quando o cartão mostra **Sincronizado**. A partir daí, o mapa, as camadas e os formulários já estão no celular. Os outros estados do cartão estão na [documentação do app](https://docs.terranode.com.br/app/projetos/#estados-de-um-projeto-na-lista).

![Cartão do projeto Supressão Floripa com o selo Sincronizado, o mapa da área e o botão Iniciar sessão de campo](../../assets/blog/como-coletar-dados-em-campo-sem-internet/cartao-sincronizado.webp)

*O cartão do projeto de exemplo depois do download.*

Antes de guardar o celular, abra o projeto e confira duas coisas. A primeira é o mapa base. Na aba **Projeto**, ele precisa aparecer como **Incluído**, porque sem ele as camadas ficam sobre um fundo vazio quando não há sinal. A segunda é o espaço livre. As fotos ficam no aparelho em resolução original até você enviá-las.

![Seção Mapa da aba Projeto, com a área de 2070,1 km², o mapa base Incluído e a camada unidades-de-conservacao](../../assets/blog/como-coletar-dados-em-campo-sem-internet/aba-projeto-mapa-base.webp)

*A seção Mapa da aba Projeto, com o mapa base incluído.*

Dois avisos podem aparecer nessa hora, e nenhum deles você resolve sozinho. **Sem pacote disponível** quer dizer que o projeto ainda não tem área de cobertura ou que o TerraNode ainda está gerando o pacote. Um botão **Coletar** desativado, com a mensagem "Nenhum formulário atribuído a você neste projeto", quer dizer que falta incluir você em um formulário. Nos dois casos, fale com quem gerencia o projeto antes de sair, porque sem internet o celular não recebe a correção. Quem gerencia encontra os dois ajustes na documentação, em [quando o pacote é gerado](https://docs.terranode.com.br/projetos/pacotes-offline/#quando-o-pacote-e-gerado) e em [quem recebe cada formulário](https://docs.terranode.com.br/projetos/camadas-e-formularios/#quem-recebe-cada-formulario).

## No campo, comece pela sessão

Ao chegar, abra o projeto e toque em **Iniciar sessão de campo**. Na primeira vez, o Android pede acesso à localização precisa, e a sessão só começa com essa permissão.

A sessão marca o começo e o fim da saída. Ela agrupa as coletas do dia e registra o trajeto, mesmo com a tela desligada. Fora de uma sessão, nenhuma posição sai do aparelho.

![Aba Mapa com a sessão aberta e o aviso Sem conexão. O mapa mostra a área do projeto e as camadas, com os botões Coletar e Enviar dados embaixo](../../assets/blog/como-coletar-dados-em-campo-sem-internet/mapa-sem-conexao.webp)

*O projeto de exemplo em modo avião. O mapa, as camadas e o botão Coletar continuam funcionando.*

## Cada ponto, do formulário ao pino no mapa

Para registrar um ponto, toque em **Coletar** na aba **Mapa**. Se você recebeu mais de um formulário no projeto, o app pergunta qual usar e guarda a escolha. **Trocar** muda de formulário depois.

O formulário abre com a posição do GPS na tela. O campo de geometria mostra latitude, longitude e precisão, e **Fixar posição** trava o ponto quando você estiver no lugar certo. Para fotos, use **Tirar foto** dentro do formulário, e não a câmera do celular. Assim a foto fica presa à coleta, com a posição de onde você a tirou. A documentação mostra [como cada tipo de campo aparece no app](https://docs.terranode.com.br/app/coleta/#como-os-campos-aparecem-no-aplicativo).

![Formulário Supressão Vegetal com os campos de espécie, fotos e município, e o campo de geometria com latitude, longitude, precisão e o botão Fixar posição](../../assets/blog/como-coletar-dados-em-campo-sem-internet/formulario.webp)

*O formulário aberto em campo. O Município já veio preenchido pela localização.*

No print, o Município se preencheu sozinho a partir da posição. O guia do Shapefile mostra [como montar um campo assim](/blog/como-levar-um-shapefile-para-o-campo/#deixe-a-camada-preencher-o-formulário).

Ao terminar, toque em **Enviar**. O nome engana um pouco, porque sem sinal nada sai do celular. O app grava a coleta no aparelho, põe um pino no mapa e cria uma linha na aba **Coletas** com o estado **Não enviada**. O envio de verdade fica para depois.

Só não feche o formulário antes de tocar em **Enviar**. Fechar descarta tudo o que você preencheu, inclusive as fotos.

Por enquanto, o app coleta apenas pontos. Linhas e polígonos aparecem no mapa como referência, mas ainda não dá para desenhá-los em campo.

## Quando o sinal volta

Na volta, os dados sobem em duas etapas, e é essa divisão que explica os estados da aba **Coletas**.

As respostas dos formulários e o trajeto sobem sozinhos assim que há conexão. O app tenta ao gravar uma coleta, ao encerrar a sessão, ao abrir o app e a cada 10 minutos com a sessão aberta. Com isso, quem gerencia o projeto vê o avanço da equipe logo que alguém pega sinal.

Fotos, vídeos, áudios e assinaturas esperam você tocar em **Enviar dados**, no mapa do projeto ou no cartão dele. São os arquivos pesados, e você escolhe quando gastar a rede com eles. O melhor momento é no Wi-Fi, ao fim do dia. Se a conexão cair no meio de um arquivo, o envio continua de onde parou. Se você tocar sem conexão, o botão mostra **Aguardando conexão** e começa sozinho quando a internet volta.

Na aba **Coletas**, o estado de cada linha diz em que ponto está cada coleta:

| Estado | O que significa |
| --- | --- |
| **Não enviada** | A resposta ainda está só no aparelho |
| **Enviada · mídia pendente** | A resposta chegou, mas as fotos ainda estão só no aparelho |
| **Enviada** | A resposta e todas as mídias chegaram e foram verificadas |
| **Recusada** | O servidor recusou, e o motivo aparece dentro da coleta |

![Aba Coletas com três coletas do formulário Supressão Vegetal, nos estados Não enviada, Enviada · mídia pendente e Enviada](../../assets/blog/como-coletar-dados-em-campo-sem-internet/coletas-estados.webp)

*A coleta só ganha número depois que a resposta chega ao servidor, por isso a primeira linha ainda não tem um.*

O estado que mais engana é **Enviada · mídia pendente**. Ele parece trabalho terminado, mas as fotos daquela coleta só existem no celular até alguém tocar em **Enviar dados**. Se alguma coleta aparecer como **Recusada**, a documentação lista os [motivos de recusa](https://docs.terranode.com.br/app/enviar-dados/#motivos-de-recusa).

## No fim do dia, encerre a sessão

Com tudo enviado, toque em **Encerrar**. A sessão fecha de vez. Você não consegue mais editar nem excluir as coletas dela, nem reabri-la, e a próxima saída pede uma sessão nova. **Enviar dados** continua funcionando depois disso, então ainda dá para mandar fotos que ficaram para trás.

Um cuidado vale para qualquer dia. Não desinstale o app com coletas pendentes, porque desinstalar apaga o que ainda não subiu. Se o app [desconectar a sua conta](https://docs.terranode.com.br/app/enviar-dados/#o-aplicativo-foi-desconectado), entre de novo com a mesma conta, e os dados continuam no aparelho.

## Antes da próxima saída

Coletar sem internet funciona quando você faz o trabalho de casa com internet. Baixe o projeto na véspera, espere o **Sincronizado** e confira o mapa base. No campo, lembre que **Enviar** só grava no aparelho. Na volta, toque em **Enviar dados**, porque as fotos não sobem sozinhas.

Se a equipe trabalha sobre limites, redes ou lotes que já existem, o próximo passo é [levar um Shapefile para o campo](/blog/como-levar-um-shapefile-para-o-campo/). Para ver o resto do app, veja a [página do aplicativo](/recursos/aplicativo/) ou, com mais detalhe, a [documentação do app](https://docs.terranode.com.br/app/). Para montar o que a equipe preenche, comece pelo [construtor de formulários](/recursos/formularios/).
