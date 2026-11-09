---
title: "Dados públicos no mapa de campo: UCs, terras indígenas e ANM · TerraNode"
description: "Use unidades de conservação, terras indígenas, processos minerários e limites municipais no projeto de campo sem baixar nem importar arquivos."
h1: "Dados públicos que já estão no catálogo"
subtitulo: "Limites municipais, unidades de conservação, terras indígenas, áreas quilombolas e processos minerários, prontos para entrar no projeto e ir para o celular."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-16
draft: false
recursos: [catalogos, aplicativo]
setores: [meio-ambiente, exploracao-mineral]
---

Todo projeto de campo começa com os mesmos downloads. Alguém entra no site do órgão ambiental atrás das unidades de conservação. Depois vai à FUNAI pelas terras indígenas e à ANM pelos processos minerários. Cada site entrega um formato, e nenhum avisa quando o dado muda.

O resultado mora em uma pasta compartilhada, em um arquivo chamado `UCs_final_2023`. A equipe usa esse arquivo no projeto seguinte, e no seguinte. Um dia alguém percebe que a área de estudo encosta em uma unidade criada depois do download.

No TerraNode, esses dados já estão no catálogo. A equipe do TerraNode mantém cópias das fontes oficiais e atualiza cada uma sozinha. Você só escolhe a camada. Este texto mostra onde elas ficam, como entram no projeto e o que acontece quando a fonte oficial muda.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## O que já está lá

Na página **Catálogos**, além dos catálogos da sua organização, aparecem os que trazem a marca **Público**. Os que têm origem **Dados públicos** são as cópias das fontes do governo. Hoje são cinco.

- **Limites dos municípios**, da Malha Municipal do IBGE.
- **Processos minerários**, do SIGMINE da ANM.
- **Unidades de conservação**, do cadastro nacional mantido pelo MMA.
- **Terras indígenas**, da FUNAI.
- **Áreas de quilombolas**, do INCRA.

Gestores e editores veem esses catálogos. Os coletores não abrem catálogos, mas recebem as camadas no celular, dentro do projeto.

## Confira de onde veio e de quando é

Antes de usar um dado público em um laudo, você precisa saber a data dele. Abra a camada e olhe a **Visão geral**. O TerraNode mostra o órgão que publica, a licença de uso, o endereço de onde o arquivo foi baixado e a versão.

Duas datas respondem à pergunta que importa. **Dados alterados em** diz quando a fonte oficial mudou pela última vez. **Verificado em** diz quando o TerraNode foi conferir. Com as duas, você escreve no relatório a fonte e a data da base sem depender da memória de ninguém.

A mesma tela tem o mapa, a tabela de atributos e os metadados. Dá para navegar pela camada e ver as colunas antes de decidir se ela serve.

## Coloque no projeto

O caminho é o de qualquer camada. No assistente **Novo projeto**, no passo **Camadas**, escolha **Adicionar** e busque o catálogo público. A busca só mostra os catálogos com dados que cruzam a área de cobertura do projeto. Marque a camada e confirme.

A camada chega com o estilo que a equipe do TerraNode preparou. Um catálogo público é somente leitura, então você não edita esse estilo. Se o projeto precisa de outra aparência, o estilo substituto tem que vir de um catálogo da sua organização.

Quando o TerraNode monta o pacote offline, ele recorta a camada pela área de cobertura. A base de processos minerários cobre o Brasil inteiro, mas o celular recebe só o que toca a área do projeto. O download continua leve.

## No campo, sem internet

No app, a camada pública aparece na lista de **Camadas** como qualquer outra. O coletor liga, desliga e vê os polígonos sobre o mapa, mesmo em modo avião. O nome do órgão aparece no canto do mapa sempre que a camada está desenhada.

Para quem faz levantamento ambiental, isso responde no local se o ponto está dentro de uma unidade de conservação ou perto do limite de uma terra indígena. Para quem faz pesquisa mineral, mostra de quem é o processo em que a equipe está pisando.

## Quando a fonte oficial muda

Cada cópia tem uma cadência de verificação, que aparece na **Visão geral** da camada. No horário marcado, o TerraNode consulta a fonte oficial. Se nada mudou, só a data de **Verificado em** avança.

Se a fonte mudou, a camada ganha uma versão nova no mesmo lugar. Os projetos que a usam continuam válidos, e o pacote offline de cada um é refeito. No celular, o projeto aparece como **Atualização pendente**, e a equipe recebe a base nova na próxima atualização. Ninguém precisa baixar, importar nem avisar.

Há uma proteção para o dia em que a fonte oficial sai quebrada. Se uma camada perde mais de 10 % das feições de uma vez, ou some da fonte, a atualização fica retida até a equipe do TerraNode conferir. Enquanto isso, você continua com a última versão boa. Um arquivo truncado no site do órgão não apaga metade das unidades de conservação do seu mapa.

## O que essas camadas não são

Elas são referência. A camada mostra o que o órgão publicou na data indicada, com a precisão do órgão. Uma decisão de licenciamento continua pedindo a consulta formal, e a tela de **Visão geral** dá o endereço da fonte para isso.

O conjunto também é fixo por enquanto. Novas fontes entram pelas mãos da equipe do TerraNode, e não pela interface. Se o seu trabalho depende de uma base que não está na lista, você pode enviar o arquivo para um catálogo da sua organização.

## Um download a menos por projeto

O caminho é curto. Você acha a camada em um catálogo com a marca **Público**, confere a fonte e a data na **Visão geral**, adiciona no passo **Camadas** do projeto e a equipe abre no celular sem internet. Quando o órgão atualiza a base, o projeto recebe a versão nova sozinho.

A lista das fontes e as regras de atualização estão na [documentação de dados públicos](https://docs.terranode.com.br/catalogos/dados-publicos/). Para os dados que são só seus, veja [como levar um Shapefile para o campo](/blog/como-levar-um-shapefile-para-o-campo/). E, para ler essas mesmas camadas no computador, o artigo [do campo ao QGIS](/blog/como-exportar-coletas-para-o-qgis/) aponta o caminho.
