---
title: "Aplicativo para exploração mineral e coleta geoquímica - TerraNode"
description: "Faça mapeamento geológico, coleta geoquímica e quarteamento com templates prontos, coleta offline criptografada e direitos minerários no mapa. Conheça o TerraNode."
setor: "Exploração mineral"
h1: "Coleta de campo para exploração mineral e pesquisa geológica"
subtitulo: "O TerraNode é uma plataforma de coleta de dados geoespaciais em campo para exploração mineral, com templates de coleta geoquímica, quarteamento e mapeamento geológico, registro offline e criptografado de amostras e afloramentos, e camadas de direitos minerários e cartas geológicas no mapa de quem está em campo."
ordem: 7
draft: false

doresTitulo: "O que dificulta as campanhas de exploração mineral"
dores:
  - titulo: "Dado sensível exposto em campo"
    texto: "Na exploração, uma amostra com teor anômalo pode valer mais do que o próprio aparelho onde foi registrada. Fichas em papel, planilhas e fotos soltas no celular deixam esse dado ao alcance de qualquer um que encontre o caderno ou o telefone perdido, muito antes de a área ser requerida ou de o resultado ser divulgado."
  - titulo: "Fichas que não seguem a metodologia"
    texto: "Cada campanha tem seu protocolo: geoquímica de solo, sedimento de corrente, rocha, mapeamento de afloramentos. Quando a ficha não acompanha o método, a equipe anota por fora, o código da amostra se repete ou fica em branco, e o problema só aparece quando o laudo do laboratório volta sem par."
  - titulo: "Contexto que fica no escritório"
    texto: "Limites de processos minerários, cartas geológicas e alvos de campanha costumam ficar no SIG do escritório. Sem essas camadas no celular, o geólogo em campo não sabe com segurança se está dentro da área requerida, perto de um processo de terceiros ou sobre a unidade que queria amostrar."

passosLead: "Geólogos e equipes de exploração podem partir de templates prontos, organizar o time, coletar amostras e afloramentos em campo e revisar os registros antes de exportá-los. Tudo em um único fluxo."
passos:
  - titulo: "Configure o formulário"
    texto: "Comece por um template de coleta geoquímica, quarteamento ou mapeamento geológico e ajuste os campos à metodologia da campanha. Se preferir, descreva o levantamento e use a IA para gerar o formulário."
    lista:
      - "Templates para geoquímica, quarteamento e exploração"
      - "Campos obrigatórios e regras de validação"
      - "Versionamento com histórico de alterações"
  - titulo: "Organize a equipe"
    texto: "Convide geólogos, técnicos e auxiliares de campo, defina permissões e atribua cada formulário a seu responsável."
    lista:
      - "Perfis de coletor, revisor e gestor"
      - "Convite por e-mail ou link"
      - "Formulários atribuídos por pessoa"
      - "Produção individual acompanhada em tempo real"
  - titulo: "Colete dados em campo"
    texto: "Registre amostras, afloramentos, fotos e geometrias pelo aplicativo, com direitos minerários e cartas geológicas no mapa. Sem sinal, tudo fica criptografado no aparelho até a sincronização."
    lista:
      - "Coleta offline e criptografada no aparelho"
      - "Direitos minerários e cartas geológicas no mapa"
      - "Precisão centimétrica com GNSS externo"
      - "Sincronização automática"
  - titulo: "Revise, valide e exporte"
    texto: "Os registros passam por uma etapa de revisão antes da exportação. Quando necessário, o revisor devolve a amostra ao coletor com comentário para correção."
    lista:
      - "Fila de revisão por projeto"
      - "Aprovação ou devolução com comentário"
      - "Exportação em CSV, GeoJSON e Shapefile"

camposTitulo: "Campos para exploração mineral"
campos:
  - "Código da amostra"
  - "Tipo de amostra"
  - "Litologia"
  - "Direção / mergulho"
  - "Massa inicial / final"
  - "Processo minerário"

faqTitulo: "Perguntas frequentes sobre coleta de dados em campo para exploração mineral"
faq:
  - q: "O que é coleta geoquímica em exploração mineral?"
    a: |-
      Coleta geoquímica é a amostragem de solo, sedimento de corrente, rocha ou outros materiais para análise em laboratório, com o objetivo de identificar anomalias que indiquem a presença de mineralização em uma área.

      No TerraNode, a equipe usa um template de coleta geoquímica com tipo de amostra, código, profundidade, descrição do material e fotos, e cada amostra fica ligada à coordenada exata em que foi coletada.
  - q: "Como registrar o quarteamento de amostras?"
    a: |-
      O quarteamento é a redução de uma amostra a uma fração representativa, por divisões sucessivas. Para que o resultado seja rastreável, é preciso registrar a massa inicial, a massa final, o número de etapas e as frações geradas.

      O TerraNode tem um template de quarteamento com esses campos, preenchido no mesmo fluxo da coleta e vinculado à amostra de origem.
  - q: "Como fazer mapeamento geológico com o celular?"
    a: |-
      Para fazer mapeamento geológico com o celular, use um aplicativo que registre cada ponto de afloramento com coordenada, fotos e os atributos da descrição geológica, e que funcione sem sinal.

      No TerraNode, o template de exploração reúne litologia, estruturas com direção e mergulho, alteração, mineralização e fotos em um único registro, com as cartas geológicas da área visíveis no mapa durante a coleta.
  - q: "Consigo ver os direitos minerários no mapa em campo?"
    a: |-
      Sim. O mapa do aplicativo pode mostrar camadas de direitos minerários, mantidas atualizadas pelo próprio TerraNode, além de cartas geológicas e das camadas que a sua organização configurar.

      Assim, o geólogo confere em campo se está dentro da área requerida ou próximo de processos de terceiros, mesmo sem conexão.
  - q: "O que acontece com os dados se o aparelho for roubado ou perdido?"
    a: |-
      Os registros coletados no TerraNode ficam criptografados no próprio aparelho, e as fotos e amostras voltam ao servidor também criptografadas. Quem tiver acesso ao celular não consegue ler os dados da campanha fora do aplicativo.

      Os dados pertencem à sua organização e ficam armazenados no Brasil, com LGPD por arquitetura.
  - q: "O TerraNode funciona sem sinal de celular?"
    a: "Sim. A equipe preenche formulários e registra fotos, áudios e geometrias sem conexão, em áreas remotas de pesquisa, e tudo é sincronizado automaticamente quando o sinal retorna."
  - q: "O TerraNode funciona com ArcGIS?"
    a: "Sim. O TerraNode se integra ao ArcGIS Online e ao ArcGIS Enterprise. As camadas do seu portal podem ir para o mapa de campo, e as campanhas validadas são exportadas em CSV, GeoJSON e Shapefile."
  - q: "O TerraNode reduz o custo da operação?"
    a: |-
      Sim. Templates prontos, campos obrigatórios e revisão antes da exportação reduzem a redigitação, as amostras sem identificação e os retornos a campo para corrigir registros.

      Além disso, como uma solução brasileira, nossa plataforma trabalha com valores em reais e abaixo da concorrência.
---

## Coleta de dados em campo para exploração mineral e pesquisa geológica

Em uma campanha de exploração, cada amostra precisa ser rastreável do ponto de coleta ao laudo: onde foi coletada, quando, por quem, de que material e como foi preparada. É isso que dá confiança aos resultados e sustenta a interpretação dos alvos.

Na **coleta geoquímica**, o trabalho envolve amostras de solo, sedimento de corrente e rocha, com código, profundidade, descrição do material e registro fotográfico.

No **quarteamento**, é preciso registrar massa inicial, massa final, número de etapas e as frações que seguem para o laboratório.

No **mapeamento geológico**, cada afloramento reúne litologia, estruturas com direção e mergulho, alteração, mineralização e fotos.

E boa parte dessas campanhas acontece longe de qualquer sinal de celular.

### Seus dados de exploração protegidos, mesmo se o aparelho sumir

Um resultado de exploração costuma valer muito antes de ser anunciado ou de a área ser requerida. Por isso, no TerraNode, cada registro é criptografado no próprio aparelho no momento da coleta e continua criptografado no caminho até o servidor. Se um celular for perdido ou roubado em campo, os dados da campanha não ficam legíveis fora do aplicativo.

### Direitos minerários e geologia no mapa de quem coleta

O mapa do aplicativo mostra as camadas que a equipe configurar, como **direitos minerários**, mantidos atualizados pelo próprio TerraNode, e **cartas geológicas** da área. O geólogo vê em campo os limites dos processos, as unidades mapeadas e os alvos da campanha, mesmo sem conexão.

### Templates prontos para cada etapa da campanha

O TerraNode tem templates de **coleta geoquímica**, **quarteamento** e **exploração**. A equipe parte de um deles e ajusta campos, regras e preenchimentos obrigatórios à metodologia da campanha. Os dados ficam no aparelho sem sinal e são sincronizados automaticamente quando a conectividade retorna.

Nossa plataforma também se integra ao **ArcGIS Online** e ao **ArcGIS Enterprise**, conectando a **coleta de dados em campo** ao **sistema de informação geográfica (SIG)** da organização.

**Conheça as soluções do TerraNode para outras operações:** [mineração](/solucoes/mineracao/), [meio ambiente](/solucoes/meio-ambiente/), [topografia e cadastro](/solucoes/topografia-e-cadastro/), [energia e telecom](/solucoes/energia-e-telecom/) e [agro](/solucoes/agro/).

**Para conhecer outros recursos de configuração, acesse:** [formulários](/recursos/formularios/) e [catálogos](/recursos/catalogos/).

> **Atenção às normas e aos procedimentos:** a pesquisa mineral deve observar os requisitos técnicos e legais aplicáveis a cada processo. No Brasil, isso inclui o [Código de Mineração (Decreto-Lei nº 227/1967)](https://www.planalto.gov.br/ccivil_03/decreto-lei/del0227.htm), que regula a autorização de pesquisa e os direitos minerários, e as normas da [Agência Nacional de Mineração (ANM)](https://www.gov.br/anm/pt-br).
>
> O **TerraNode** pode apoiar o registro e a organização das informações de campo, mas o atendimento às normas depende também da metodologia, da responsabilidade técnica e das exigências da ANM em cada processo.
