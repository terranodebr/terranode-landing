---
title: "Como migrar um formulário do Survey123 para o TerraNode · TerraNode"
description: "Envie a planilha XLSForm do Survey123, leia o relatório do que mudou na importação e publique o formulário para a equipe de campo."
h1: "Do Survey123 ao TerraNode sem redigitar o formulário"
subtitulo: "O caminho de um XLSForm, da pasta do Survey123 Connect até o celular do coletor, e o que precisa de ajuste no meio."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-11
draft: false
capa:
  src: "../../assets/blog/como-migrar-um-formulario-do-survey123/planilha-xlsform.webp"
  alt: "Planilha XLSForm aberta, com as colunas type, hint, required, relevant, appearance, default e constraint na primeira linha"
recursos: [formularios, integracoes]
---

Um formulário de campo que funciona custou caro. Alguém passou meses ajustando a ordem das perguntas, as opções de cada lista e os limites de cada medida, sempre depois de um dia de campo que deu errado. Esse trabalho está guardado em uma planilha, o XLSForm do Survey123.

Na hora de testar outra ferramenta, a primeira conta que a equipe faz é o custo de montar tudo de novo. São sessenta perguntas para redigitar uma a uma, com as listas e as condições, e muita avaliação termina nessa conta.

O TerraNode lê o XLSForm e monta o formulário para você. Nem tudo tem equivalente, e a importação diz o que ficou de fora.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## Encontre a planilha

O XLSForm é um arquivo `.xlsx`. Se você usa o Survey123 Connect, ele está na pasta do formulário, com o nome do próprio formulário. Se você montou o formulário no site do Survey123, o menu do formulário tem a opção de exportar como XLSForm.

A importação traz a estrutura do formulário: as perguntas, as listas e as regras. As respostas já coletadas no Survey123 não vêm junto.

## Envie e veja o formulário nascer

No TerraNode, abra **Formulários** e escolha **Novo formulário**. Marque **Importar do Survey123**, clique em **Continuar** e arraste o `.xlsx`. O arquivo pode ter até 5 MB.

Logo em seguida, o construtor abre com os campos no lugar. O nome vem do título do formulário. Os textos, os números com mínimo e máximo, as listas de escolha, as datas, as fotos, a assinatura, o áudio e o código de barras chegam como campos do mesmo tipo. As perguntas obrigatórias continuam obrigatórias.

As condições mais comuns também vêm. Uma pergunta que só aparece quando a condição do poste é "ruim", ou quando a altura passa de 10, continua aparecendo só nesses casos.

## Leia o relatório antes de sair da página

Acima dos campos aparece o aviso **Formulário importado do Survey123.** Dentro dele, **O que mudou na importação** lista cada item que não veio ou veio diferente.

O relatório não fica guardado. Se você clicar em **Dispensar** ou sair da página, ele some. Copie o conteúdo para um documento antes de mexer em qualquer campo.

O que costuma aparecer nele:

- **Repetições.** Um bloco de perguntas que se repete dentro da mesma coleta é removido, e o relatório lista as perguntas que estavam nele.
- **Grupos.** As perguntas ficam, na mesma ordem, sem o agrupamento.
- **Linhas e polígonos.** Hoje o TerraNode coleta pontos. Uma pergunta de linha ou de área vira um ponto, e o relatório aponta cada caso.
- **Cálculos, notas e dicas.** Campos calculados, textos de instrução e dicas de preenchimento não vêm.
- **Condições e restrições mais elaboradas.** A pergunta fica sempre visível e opcional, e o relatório cita a expressão original para você refazer a regra.

Use essa lista como roteiro de ajuste. Para cada linha, decida se a regra ainda faz falta e, se fizer, refaça no construtor.

## Ajuste antes da primeira coleta

O formulário importado já está salvo e ainda não tem coletas. Nesse estado, tudo pode mudar. Você renomeia campos, remove o que sobrou e refaz as condições em **Mostrar quando...**.

Confira também a **Chave** de cada campo. A chave é o nome da coluna nos dados exportados, e a importação ajusta os nomes que saem do padrão. `Número_Torre`, por exemplo, vira `numero_torre`. Se os seus relatórios dependem de nomes de coluna específicos, acerte as chaves agora. Depois da primeira coleta recebida, elas ficam travadas.

Use **Visualizar** para percorrer o formulário como o coletor vai ver. Dá para responder tudo, menos o que usa câmera, microfone ou GPS. Quando estiver bom, clique em **Publicar**.

## Leve para o campo

Um formulário publicado ainda não está no celular de ninguém. Ele precisa entrar em um projeto. Na aba **Formulários** do projeto, adicione o formulário e use **Selecionar coletores** para dizer quem o recebe. O TerraNode refaz o pacote offline, e o app mostra **Atualização pendente** para a equipe.

Antes de soltar para todo mundo, faça uma coleta de teste você mesmo. Dez minutos no pátio do escritório mostram o que a pré-visualização não mostra, como a foto, o GPS e o leitor de código de barras.

## Quando a migração não fecha

Se o seu formulário depende de repetições, como várias árvores dentro de uma parcela, ou se a coleta é o traçado de uma linha, a importação entrega um formulário mais simples do que o original. Nesses casos, a lista do relatório mostra quanto falta, e você decide com ela na mão.

Para os formulários de ponto, com perguntas, listas, fotos e condições simples, a planilha que levou meses para amadurecer chega pronta em uma tarde.

## O caminho inteiro

Você pega o `.xlsx` do Survey123, importa em **Novo formulário**, copia o relatório, refaz as regras que ficaram de fora, acerta as chaves, publica e testa em um projeto. De tudo isso, o relatório é o que não pode se perder, porque ele diz o que conferir.

A tabela completa do que é convertido está na [documentação de importação do Survey123](https://docs.terranode.com.br/formularios/importar-survey123/). A comparação entre as duas ferramentas está em [TerraNode e ArcGIS Field Maps](/comparativos/arcgis-field-maps/). E, com o formulário no projeto, o próximo passo é [coletar em campo sem internet](/blog/como-coletar-dados-em-campo-sem-internet/).
