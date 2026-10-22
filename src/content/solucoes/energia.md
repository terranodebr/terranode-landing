---
title: "Aplicativo para inspeção e cadastro de ativos de energia - TerraNode"
description: "Inspecione e cadastre ativos de distribuição, transmissão e geração com a rede do seu ArcGIS no campo, coleta offline criptografada e template de cadastro de postes. Conheça o TerraNode."
setor: "Energia"
h1: "Inspeção e cadastro de ativos de energia elétrica"
subtitulo: "O TerraNode é uma plataforma de coleta de dados geoespaciais em campo para distribuição, transmissão e geração de energia, com a rede do seu ArcGIS no mapa de quem está em campo, templates de cadastro de ativos, registro offline e criptografado de inspeções e atendimentos, e recursos para revisão e exportação de dados."
ordem: 1
draft: false

doresTitulo: "O que dificulta a inspeção e o cadastro de ativos de energia"
dores:
  - titulo: "Cadastro que não bate com o campo"
    texto: "A rede no GIS da empresa raramente é igual à que está em campo: postes trocados, equipamentos instalados sem registro, estruturas que mudaram de lugar. Quando a equipe sai sem ver a rede atual no celular, ela inspeciona ou cadastra às cegas, e a correção do cadastro vira um trabalho à parte no escritório."
  - titulo: "Inspeções e OS sem padrão nem histórico"
    texto: "Cada equipe, turno ou empreiteira registra a inspeção e o atendimento de chamados de um jeito. Com fichas em papel, planilhas e fotos soltas no WhatsApp, juntar o histórico de um ativo ou comprovar o que foi feito em uma ordem de serviço exige tempo e deixa lacunas na manutenção."
  - titulo: "Dado de infraestrutura crítica exposto"
    texto: "A localização e o estado de subestações, linhas e equipamentos são informação sensível. Registros abertos em celulares pessoais, galerias de fotos e grupos de mensagem deixam esses dados sem controle de acesso e ao alcance de qualquer um se um aparelho for perdido."

passosLead: "Distribuidoras, transmissoras e geradoras podem partir de templates de cadastro, levar a rede do ArcGIS para o campo, coletar inspeções e atendimentos e revisar os registros antes de exportá-los. Tudo em um único fluxo."
passos:
  - titulo: "Configure o formulário"
    texto: "Comece pelo template de cadastro de postes ou monte o formulário da inspeção a partir de uma camada do seu ArcGIS, em que cada coluna vira um campo. Se preferir, descreva a inspeção e use a IA para gerar o formulário."
    lista:
      - "Template de cadastro de postes para distribuição"
      - "Formulário gerado a partir da camada do ArcGIS"
      - "Campos obrigatórios e regras de validação"
      - "Versionamento com histórico de alterações"
  - titulo: "Organize a equipe"
    texto: "Convide eletricistas, inspetores, técnicos e empreiteiras, defina permissões e atribua cada formulário, inspeção ou atendimento a seu responsável."
    lista:
      - "Perfis de coletor, revisor e gestor"
      - "Convite por e-mail ou link"
      - "Formulários atribuídos por pessoa"
      - "Produção individual acompanhada em tempo real"
  - titulo: "Colete dados em campo"
    texto: "Inspecione e cadastre ativos com a rede atual do seu ArcGIS no mapa do aplicativo, com fotos, geometrias e ocorrências. Sem sinal, tudo fica criptografado no aparelho até a sincronização."
    lista:
      - "Rede do ArcGIS no mapa, com a simbologia"
      - "Coleta offline e criptografada no aparelho"
      - "Precisão centimétrica com GNSS externo"
      - "Sincronização automática"
  - titulo: "Revise, valide e exporte"
    texto: "Os registros passam por uma etapa de revisão antes de seguirem para o restante do fluxo. Quando necessário, o revisor devolve o registro ao coletor com comentário para correção."
    lista:
      - "Fila de revisão por projeto"
      - "Aprovação ou devolução com comentário"
      - "Exportação em CSV, GeoJSON e Shapefile"
      - "Em breve: gravação direto no seu ArcGIS"

camposTitulo: "Campos para inspeção e cadastro de ativos de energia"
campos:
  - "Nº do poste / estrutura"
  - "Tipo de ativo"
  - "Componente"
  - "Severidade"
  - "Fotos (mín. 3)"
  - "Nº da OS"

faqTitulo: "Perguntas frequentes sobre coleta de dados em campo para energia elétrica"
faq:
  - q: "Como fazer inspeção de ativos de energia com formulário digital?"
    a: |-
      Para inspecionar ativos de energia com um formulário digital, configure os campos de acordo com os critérios da operação, incluindo identificação da estrutura, componentes inspecionados, severidade das ocorrências e evidências fotográficas obrigatórias.

      No TerraNode, a equipe faz a inspeção com a rede do ArcGIS no mapa, e cada registro reúne coordenada, fotos, data, hora e responsável, formando o histórico do ativo entre uma inspeção e outra.
  - q: "Como fazer o cadastro de postes em campo?"
    a: |-
      O cadastro de postes registra, para cada estrutura, sua localização, identificação, características e os equipamentos instalados, com fotos que comprovem o que foi levantado.

      O TerraNode tem um template de cadastro de postes para distribuição, que a equipe pode ajustar ao padrão da concessionária antes de ir a campo.
  - q: "Dá para registrar o atendimento de chamados e ordens de serviço?"
    a: |-
      Sim. A equipe pode usar um formulário de atendimento para registrar, em campo, o número da OS, o que foi encontrado, o que foi feito e as fotos antes e depois, com coordenada e horário gravados no registro.

      Cada formulário pode ser atribuído a uma pessoa, e o gestor acompanha a produção da equipe em tempo real.
  - q: "O TerraNode lê a rede do meu ArcGIS?"
    a: |-
      Sim. Conecte o ArcGIS Online ou o ArcGIS Enterprise da sua organização e escolha as camadas da rede que vão para o campo. Elas chegam ao aplicativo com a simbologia, ficam disponíveis sem conexão e podem ser sincronizadas de novo sempre que a rede mudar.
  - q: "O TerraNode grava os dados de volta no ArcGIS?"
    badge: "Em breve"
    a: |-
      Está no roadmap. A gravação será opcional e configurável: você vai poder enviar os registros validados para uma nova feature layer ou atualizar uma feature layer existente, entregando o dado de campo para o restante do seu pipeline Esri.

      Hoje o TerraNode só lê do portal, e as campanhas validadas são exportadas em CSV, GeoJSON e Shapefile.
  - q: "O que acontece com os dados se o aparelho for roubado ou perdido?"
    a: |-
      Os registros coletados no TerraNode ficam criptografados no próprio aparelho e voltam ao servidor também criptografados. Quem tiver acesso ao celular não consegue ler os dados da rede ou das inspeções fora do aplicativo.

      Os dados pertencem à sua organização e ficam armazenados no Brasil, com LGPD por arquitetura.
  - q: "O TerraNode funciona sem sinal de celular?"
    a: "Sim. A equipe preenche formulários e registra fotos, áudios e geometrias sem conexão, ao longo de linhas de transmissão, em usinas e em áreas rurais sem cobertura, e tudo é sincronizado automaticamente quando o sinal retorna."
  - q: "O TerraNode reduz o custo da operação?"
    a: |-
      Sim. Formulários padronizados, campos obrigatórios e revisão antes da exportação reduzem a redigitação, os registros incompletos e as revisitas para corrigir informações.

      Além disso, como uma solução brasileira, nossa plataforma trabalha com valores em reais e abaixo da concorrência.
---

## Coleta de dados em campo para distribuição, transmissão e geração de energia

Em uma empresa de energia, cada ativo precisa ter um histórico confiável: onde está, como foi instalado, em que estado estava na última inspeção e o que foi feito nele. É esse histórico que sustenta o plano de manutenção, a resposta a ocorrências e a qualidade do cadastro da rede.

Na **distribuição**, o trabalho envolve o cadastro de postes e equipamentos, a inspeção da rede e o atendimento de chamados e ordens de serviço.

Na **transmissão**, envolve a inspeção de torres, cabos, isoladores e da faixa de servidão ao longo de quilômetros de linha.

Na **geração**, abrange a vistoria de usinas e de seus equipamentos.

E boa parte desse trabalho acontece longe de qualquer sinal de celular.

### A rede do seu ArcGIS no campo

O TerraNode se conecta ao **ArcGIS Online** e ao **ArcGIS Enterprise** da sua organização. As camadas da rede chegam ao aplicativo com a simbologia e viram o mapa de quem está em campo. O formulário pode sair da própria camada, com cada coluna virando um campo. Assim, a equipe inspeciona e cadastra vendo a rede atual, e não uma cópia desatualizada.

Em breve, a volta também será possível: de forma opcional e configurável, os registros validados poderão ser gravados em uma nova feature layer ou atualizar uma feature layer existente, alimentando o restante do pipeline Esri da empresa. Até lá, as campanhas validadas são exportadas em CSV, GeoJSON e Shapefile.

### Dados de infraestrutura protegidos no aparelho

Informação sobre a rede elétrica é sensível. No TerraNode, cada registro é criptografado no próprio aparelho no momento da coleta e continua criptografado no caminho até o servidor. Se um celular for perdido ou roubado, os dados da rede e das inspeções não ficam legíveis fora do aplicativo.

### Inspeção, cadastro e atendimento no mesmo fluxo

A equipe parte do template de **cadastro de postes** ou de um formulário próprio de **inspeção** ou de **atendimento de OS**, com campos, regras e fotos obrigatórias definidos pela operação. Cada registro passa por revisão antes de seguir, e o revisor pode devolvê-lo ao coletor com comentário.

**Conheça as soluções do TerraNode para outras operações:** [telecom](/solucoes/telecom/), [topografia e cadastro](/solucoes/topografia-e-cadastro/), [meio ambiente](/solucoes/meio-ambiente/), [saneamento e obras](/solucoes/saneamento-e-obras/) e [mineração](/solucoes/mineracao/).

**Para conhecer outros recursos de configuração, acesse:** [formulários](/recursos/formularios/) e [catálogos](/recursos/catalogos/).

> **Atenção às normas e aos procedimentos:** cada operação deve observar os requisitos técnicos e legais aplicáveis, além das condições de cada concessão. No Brasil, isso inclui a [Lei nº 9.427/1996](https://www.planalto.gov.br/ccivil_03/leis/l9427cons.htm), que criou a [Agência Nacional de Energia Elétrica (ANEEL)](https://www.gov.br/aneel/pt-br) e organiza o regime de concessões do setor, e a NR-10, que trata da segurança em instalações e serviços em eletricidade.
>
> O **TerraNode** pode apoiar o registro e a organização das informações de campo, mas o atendimento às normas depende também dos procedimentos, da responsabilidade técnica e das exigências da ANEEL e da concessão em cada caso.
