---
title: "Aplicativo para controle de amostragem em mineração - TerraNode"
description: "Organize o controle de amostragem da mina com templates de coleta e quarteamento, registros offline criptografados e rastreabilidade por amostra. Conheça o TerraNode."
setor: "Mineração"
h1: "Controle de amostragem e coleta de campo para mineração"
subtitulo: "O TerraNode é uma plataforma de coleta de dados geoespaciais em campo para mineração, com templates de amostragem e quarteamento, registro offline e criptografado de cada amostra, camadas da operação no mapa e recursos para revisão e exportação de dados."
ordem: 9
draft: false

doresTitulo: "O que dificulta o controle de amostragem na mina"
dores:
  - titulo: "Amostras sem rastreabilidade"
    texto: "Quando a amostra é identificada à mão e registrada em papel ou planilha, um código trocado, uma etiqueta ilegível ou um registro sem coordenada basta para perder o vínculo entre o ponto amostrado e o resultado do laboratório. E esse vínculo é o que sustenta o controle de teor e a reconciliação."
  - titulo: "Muitas equipes, nenhum padrão"
    texto: "Turnos, frentes e equipes diferentes registram a mesma amostragem de formas diferentes. Sem um formulário único, com campos obrigatórios e regras de validação, os dados chegam incompletos ao escritório e o técnico gasta tempo conferindo e corrigindo em vez de analisar."
  - titulo: "Informação estratégica sem proteção"
    texto: "Teores, resultados de amostragem e dados da operação são informação estratégica da empresa. Fichas, fotos e planilhas espalhadas em celulares pessoais e conversas de WhatsApp deixam esses dados sem controle de acesso e expostos se um aparelho for perdido."

passosLead: "As equipes de mina podem partir de templates de amostragem, organizar o time por frente ou turno, coletar as amostras em campo e revisar os registros antes de exportá-los. Tudo em um único fluxo."
passos:
  - titulo: "Configure o formulário"
    texto: "Comece por um template de amostragem ou quarteamento e ajuste os campos ao procedimento da operação. Se preferir, descreva a amostragem e use a IA para gerar o formulário."
    lista:
      - "Templates de amostragem e quarteamento"
      - "Campos obrigatórios e regras de validação"
      - "Versionamento com histórico de alterações"
  - titulo: "Organize a equipe"
    texto: "Convide amostradores, técnicos e geólogos, defina permissões e atribua cada formulário à equipe responsável."
    lista:
      - "Perfis de coletor, revisor e gestor"
      - "Convite por e-mail ou link"
      - "Formulários atribuídos por pessoa"
      - "Produção individual acompanhada em tempo real"
  - titulo: "Colete dados em campo"
    texto: "Registre cada amostra com coordenada, fotos e os dados do procedimento pelo aplicativo, com as camadas da operação no mapa. Sem sinal, tudo fica criptografado no aparelho até a sincronização."
    lista:
      - "Coleta offline e criptografada no aparelho"
      - "Direitos minerários e camadas da operação no mapa"
      - "Precisão centimétrica com GNSS externo"
      - "Sincronização automática"
  - titulo: "Revise, valide e exporte"
    texto: "Os registros passam por uma etapa de revisão antes da exportação. Quando necessário, o revisor devolve a amostra ao coletor com comentário para correção."
    lista:
      - "Fila de revisão por projeto"
      - "Aprovação ou devolução com comentário"
      - "Exportação em CSV, GeoJSON e Shapefile"

camposTitulo: "Campos para controle de amostragem"
campos:
  - "Código da amostra"
  - "Local de amostragem"
  - "Tipo de material"
  - "Massa inicial / final"
  - "Foto da amostra"
  - "Responsável"

faqTitulo: "Perguntas frequentes sobre controle de amostragem em mineração"
faq:
  - q: "O que é controle de amostragem em mineração?"
    a: |-
      Controle de amostragem é o conjunto de procedimentos que garante que cada amostra coletada na operação seja identificada, registrada e rastreável do ponto de coleta ao resultado do laboratório.

      No TerraNode, cada amostra fica em um registro com código, coordenada, data, hora, responsável, fotos e os dados do procedimento, preenchidos em um formulário padronizado.
  - q: "Como registrar o quarteamento de amostras?"
    a: |-
      O quarteamento é a redução de uma amostra a uma fração representativa, por divisões sucessivas. Para que o resultado seja rastreável, é preciso registrar a massa inicial, a massa final, o número de etapas e as frações geradas.

      O TerraNode tem um template de quarteamento com esses campos, preenchido no mesmo fluxo da amostragem e vinculado à amostra de origem.
  - q: "Como padronizar a amostragem entre turnos e equipes?"
    a: |-
      Use um formulário único para todas as equipes, com campos obrigatórios e regras de validação, e uma etapa de revisão antes de os dados seguirem para análise.

      No TerraNode, o formulário é versionado e atribuído a cada pessoa, e o revisor devolve ao coletor os registros incompletos, com comentário.
  - q: "Quais camadas aparecem no mapa do aplicativo?"
    a: |-
      O mapa mostra as camadas que a sua organização configurar, como direitos minerários, mantidos atualizados pelo próprio TerraNode, cartas geológicas e camadas da própria operação importadas para o catálogo ou sincronizadas do ArcGIS.

      Todas ficam disponíveis no aparelho, inclusive sem conexão.
  - q: "O que acontece com os dados se o aparelho for roubado ou perdido?"
    a: |-
      Os registros coletados no TerraNode ficam criptografados no próprio aparelho, e as fotos e amostras voltam ao servidor também criptografadas. Quem tiver acesso ao celular não consegue ler os dados fora do aplicativo.

      Os dados pertencem à sua organização e ficam armazenados no Brasil, com LGPD por arquitetura.
  - q: "O TerraNode funciona sem sinal de celular?"
    a: "Sim. A equipe preenche formulários e registra fotos, áudios e geometrias sem conexão, em cavas, pilhas e áreas sem cobertura, e tudo é sincronizado automaticamente quando o sinal retorna."
  - q: "O TerraNode funciona com ArcGIS?"
    a: "Sim. O TerraNode se integra ao ArcGIS Online e ao ArcGIS Enterprise. As camadas do seu portal podem ir para o mapa de campo, e os dados validados são exportados em CSV, GeoJSON e Shapefile."
  - q: "O TerraNode reduz o custo da operação?"
    a: |-
      Sim. Formulários padronizados, campos obrigatórios e revisão antes da exportação reduzem a redigitação, as amostras sem identificação e o retrabalho para corrigir registros.

      Além disso, como uma solução brasileira, nossa plataforma trabalha com valores em reais e abaixo da concorrência.
---

## Coleta de dados em campo para controle de amostragem na mineração

Em uma operação de mina, cada amostra precisa ser rastreável do ponto de coleta ao resultado: onde foi coletada, quando, por quem, de que material e como foi preparada. São essas informações que sustentam o controle de teor, a reconciliação e as decisões da operação.

Na **amostragem**, o trabalho envolve identificar a amostra, registrar o local e o tipo de material, anexar fotos e indicar o responsável.

No **quarteamento**, é preciso registrar massa inicial, massa final, número de etapas e as frações que seguem para o laboratório.

Com várias frentes, turnos e equipes, esse registro precisa seguir o mesmo padrão para todos.

Quando as informações ficam espalhadas entre fichas, etiquetas e planilhas, conferir e consolidar os dados exige trabalho adicional e abre espaço para erro.

### Um padrão único de amostragem para toda a operação

Com o TerraNode, a equipe parte de templates de **amostragem** e **quarteamento** e ajusta campos, regras e preenchimentos obrigatórios ao procedimento da mina. Cada amostra fica em um único registro, com coordenada, fotos, data, hora e responsável, e passa por revisão antes de ser exportada.

### Dados da operação protegidos no aparelho

Resultados de amostragem são informação estratégica. No TerraNode, cada registro é criptografado no próprio aparelho no momento da coleta e continua criptografado no caminho até o servidor. Se um celular for perdido ou roubado, os dados não ficam legíveis fora do aplicativo.

### As camadas da operação no mapa de quem coleta

O mapa do aplicativo mostra as camadas que a equipe configurar, como **direitos minerários**, mantidos atualizados pelo próprio TerraNode, **cartas geológicas** e as camadas da própria operação. Tudo fica disponível no aparelho, mesmo sem conexão.

Nossa plataforma também se integra ao **ArcGIS Online** e ao **ArcGIS Enterprise**, conectando a **coleta de dados em campo** ao **sistema de informação geográfica (SIG)** da organização.

**Conheça as soluções do TerraNode para outras operações:** [exploração mineral](/solucoes/exploracao-mineral/), [meio ambiente](/solucoes/meio-ambiente/), [topografia e cadastro](/solucoes/topografia-e-cadastro/), [energia](/solucoes/energia/), [telecom](/solucoes/telecom/) e [saneamento e obras](/solucoes/saneamento-e-obras/).

**Para conhecer outros recursos de configuração, acesse:** [formulários](/recursos/formularios/) e [catálogos](/recursos/catalogos/).

> **Atenção às normas e aos procedimentos:** cada operação deve observar os requisitos técnicos e legais aplicáveis, além das condições de cada título minerário. No Brasil, isso inclui o [Código de Mineração (Decreto-Lei nº 227/1967)](https://www.planalto.gov.br/ccivil_03/decreto-lei/del0227.htm), que regula o aproveitamento dos recursos minerais, e as normas da [Agência Nacional de Mineração (ANM)](https://www.gov.br/anm/pt-br).
>
> O **TerraNode** pode apoiar o registro e a organização das informações de campo, mas o atendimento às normas depende também dos procedimentos, da responsabilidade técnica e das exigências da ANM em cada processo.
