---
title: "Como levar um Shapefile para o celular e usar em campo · TerraNode"
description: "Envie o Shapefile em .zip para um catálogo, coloque a camada em um projeto e abra o mapa no app Android, mesmo sem internet."
h1: "Como levar um Shapefile para o campo"
subtitulo: "O caminho de um Shapefile do computador até o mapa do celular, que abre sem internet."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-06
draft: true
capa:
  src: "../../assets/blog/como-levar-um-shapefile-para-o-campo/catalogo-estilos.jpg"
  alt: "Catálogo do TerraNode com a lista de camadas à esquerda e os estados do Brasil coloridos no mapa"
recursos: [catalogos, aplicativo]
# PRINT PENDENTE (capa): aba Estilos de um catálogo com nome real, sem a barra app.qa nem e2e-cli-smoke e test3005.
---

Quase todo trabalho de campo parte de um arquivo que alguém já tem: os limites das propriedades, a rede de distribuição, as unidades de conservação da região. Muitas vezes esse arquivo é um Shapefile, e a equipe precisa dele no celular, longe de qualquer sinal.

Copiar o arquivo para o celular não resolve. Um Shapefile são pelo menos três arquivos, o `.shp`, o `.shx` e o `.dbf`, quase sempre com um `.prj` junto. E, mesmo com tudo copiado, ainda faltariam o mapa de fundo, a área de trabalho, o estilo e um jeito de coletar por cima.

No TerraNode, você envia o Shapefile para um catálogo e escolhe a camada em um projeto. O TerraNode monta um pacote offline, e a equipe baixa esse pacote no app. Este guia segue esse caminho, do `.zip` no computador até o teste em modo avião, e termina com um uso a mais, o de deixar a camada preencher o formulário.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## No computador, monte o .zip

O TerraNode recebe o Shapefile compactado em `.zip`. Se você enviar o `.shp` solto, ele recusa com a mensagem **Tipo de arquivo não suportado**. Um mesmo `.zip` pode levar vários Shapefiles, e cada um vira uma camada.

O ponto que pede atenção é o sistema de referência. Coloque o `.prj` dentro do `.zip`, porque o arquivo precisa declarar um sistema ligado à Terra. Sem ele, ou com um sistema local de engenharia, a camada falha com o erro "vector source must use an earth-referenced CRS". Você não precisa reprojetar nada antes, porque o TerraNode converte os dados para WGS84.

Há mais dois detalhes. Uma coluna chamada `geometry` dá o erro "a column named geometry conflicts...", então renomeie a coluna antes de compactar. E, se os acentos chegarem trocados, confira a codificação do arquivo. Os outros formatos aceitos e os limites de tamanho estão na [documentação de importação](https://docs.terranode.com.br/catalogos/importar-dados/#formatos-aceitos).

## No catálogo, envie o arquivo

O catálogo é onde a organização guarda os dados geográficos. Você importa a camada uma vez e usa em quantos projetos precisar.

Em **Catálogos**, crie um com **Novo catálogo**. Na página dele, escolha **Enviar dados**, arraste o `.zip` e confirme. Cada camada passa por **Na fila**, **Processando** e **Concluído**. Pode fechar a janela enquanto isso, porque o processamento acontece no servidor.

<!-- PRINT PENDENTE: janela "Enviar dados para o catálogo", com as camadas do .zip em processamento. -->

Cada camada tem o próprio processamento, então um Shapefile com problema não impede os outros de entrar. Se um falhar, corrija e envie só ele. Se o envio inteiro falhar com "no supported datasets found in upload", o `.zip` não tem nenhum arquivo reconhecido ou está corrompido, e o caminho é montá-lo de novo. A documentação reúne os [erros mais comuns do envio](https://docs.terranode.com.br/catalogos/importar-dados/#erros-comuns).

A camada já aparece no mapa com a aparência padrão. Para colorir por categoria ou criar classes, use a aba **Estilos** e clique em **Salvar estilo**. O projeto herda o estilo, e o celular recebe o mesmo mapa. A [página de Catálogos](/recursos/catalogos/) mostra as opções, e a [documentação de estilos](https://docs.terranode.com.br/catalogos/estilos/) explica cada uma.

## No projeto, escolha a camada

Em **Projetos**, comece um **Novo projeto**. O [assistente](https://docs.terranode.com.br/projetos/#o-assistente-novo-projeto) tem vários passos, e dois deles decidem o que chega ao celular.

O primeiro é a **Área de cobertura**. Desenhe a área no mapa ou envie um arquivo com ela. O pacote recorta as camadas por essa área, então o que ficar fora não vai para o celular.

O segundo é **Camadas**. Escolha **Adicionar**, encontre o seu catálogo em **Buscar catálogo**, marque a camada e confirme em **Concluir**. A busca só mostra catálogos com dados que cruzam a área de cobertura. Na lista, a camada do topo cobre as de baixo no mapa.

<!-- PRINT PENDENTE: assistente "Novo projeto" no passo Camadas, com a camada do Shapefile na lista. -->

Nos passos **Equipe** e **Formulários**, adicione as pessoas e os formulários. Em cada formulário, use **Selecionar coletores** para dizer quem o recebe no app. Sem isso, a pessoa abre o mapa, mas não consegue coletar. Termine em **Criar projeto**.

## Espere o pacote ficar pronto

Não existe botão de publicar. O TerraNode gera o pacote offline sozinho, cerca de dois minutos depois da última mudança. A aba **Pacotes** do projeto mostra o andamento e o tamanho do download, e a versão pronta aparece em **Disponível para o campo**.

<!-- PRINT PENDENTE: aba Pacotes do projeto, com uma versão em "Disponível para o campo" e o tamanho do download. -->

Se você criou o projeto logo depois de enviar o Shapefile, espere um pouco mais. A camada já entra no projeto, mas o mapa dela fica pronto um pouco depois, e até lá ela fica fora do pacote. O teste da próxima seção pega esse caso.

Vale também juntar as alterações em uma rodada só, porque cada versão nova do pacote pede uma atualização no celular de cada pessoa da equipe. A documentação de [pacotes offline](https://docs.terranode.com.br/projetos/pacotes-offline/) explica o que entra no pacote e o que pesa no tamanho.

## No celular, teste sem internet

No app, na aba **Projetos**, toque em **Baixar projeto** e espere o cartão mostrar **Sincronizado**. O guia de [coleta sem internet](/blog/como-coletar-dados-em-campo-sem-internet/#na-véspera-com-internet) mostra o que mais conferir antes de sair. Se aparecer **Sem pacote disponível**, o projeto não tem área de cobertura ou o TerraNode ainda está gerando o pacote.

Depois vem o teste mais útil deste guia. Coloque o celular em modo avião, abra o projeto e toque em **Camadas**. A sua camada precisa estar na lista, com o tipo de geometria certo.

![Mapa do projeto com o aviso Sem conexão e o painel Camadas aberto, listando a camada unidades-de-conservacao, do tipo Polígonos, ligada](../../assets/blog/como-levar-um-shapefile-para-o-campo/camadas-sem-conexao.webp)

*O teste em um projeto de exemplo, em modo avião. A camada aparece na lista e no mapa, e o aviso no topo confirma que não há conexão.*

Se ela aparece em modo avião, vai aparecer no campo. Se não aparece, volte à aba **Pacotes** e veja se saiu uma versão mais nova. Quando sair, o cartão no celular muda para **Atualização pendente**, e **Atualizar Projeto** baixa só os arquivos que mudaram.

No celular, a camada é uma referência. O coletor liga e desliga a camada no mapa e coleta por cima, e cada coleta vira um registro novo. As feições do seu Shapefile continuam como estão.

## Deixe a camada preencher o formulário

Uma camada de polígonos, como talhões, bairros ou lotes, pode fazer mais do que aparecer no mapa. Ela pode preencher um campo do formulário a partir de onde o coletor está.

No construtor de formulários, adicione um campo [Consulta por localização](https://docs.terranode.com.br/formularios/tipos-de-campo/#consulta-por-localizacao). Em **Fonte de dados**, escolha a sua camada de polígonos e, em **Coluna**, a coluna de onde sai o valor. O formulário também precisa de um campo de geometria. A camada nem precisa estar entre as do projeto, porque o pacote já leva a fonte que o campo lê.

Em campo, o app calcula o valor no próprio celular, sem internet. Ninguém digita o nome do talhão nem procura em uma lista. Se o app não encontrar valor para aquela posição, o servidor calcula quando receber a coleta.

![Formulário com o campo Município preenchido com Florianópolis e a nota Preenchido pela localização do aparelho, acima do campo de geometria com latitude e longitude](../../assets/blog/como-levar-um-shapefile-para-o-campo/consulta-por-localizacao.webp)

*O coletor não edita esse campo. O app tirou o município de uma fonte de polígonos, usando o ponto logo abaixo.*

## Antes de chamar a equipe

O caminho inteiro cabe em uma frase. Você manda um `.zip` com o `.prj` para o catálogo, escolhe a camada em um projeto com área de cobertura, espera o pacote e testa em modo avião. O teste é a parte que não dá para pular, porque mostra no escritório o que a equipe veria no campo.

Com a camada no celular, siga para [como coletar dados em campo sem internet](/blog/como-coletar-dados-em-campo-sem-internet/). Se os seus dados já estão no ArcGIS, as [integrações](/recursos/integracoes/) trazem as camadas sem precisar enviar arquivos.
