---
title: "Aplicativo para vistoria de sites e cadastro de rede de fibra - TerraNode"
description: "Faça vistoria de sites e torres, cadastro de rede de fibra e auditoria de postes com formulários personalizados, coleta offline criptografada e integração com ArcGIS. Conheça o TerraNode."
setor: "Telecom"
h1: "Vistoria de sites e cadastro de redes de telecom"
subtitulo: "O TerraNode é uma plataforma de coleta de dados geoespaciais em campo para telecomunicações, com formulários configuráveis para vistoria de sites e torres, cadastro de rede de fibra e ocupação de postes, registro offline e criptografado de fotos e geometrias, e recursos para revisão e exportação de dados."
ordem: 2
draft: false

doresTitulo: "O que dificulta a vistoria e o cadastro de redes de telecom"
dores:
  - titulo: "Rede de campo diferente da rede no sistema"
    texto: "Caixas de emenda, CTOs e trechos de fibra instalados às pressas, postes ocupados sem registro e sites alterados entre uma visita e outra. Quando o cadastro não acompanha o campo, a manutenção demora mais, a viabilidade de novos clientes fica incerta e a equipe volta ao mesmo lugar para conferir."
  - titulo: "Cada empreiteira com uma ficha"
    texto: "Operadoras, torreiras e provedores trabalham com várias equipes e empreiteiras ao mesmo tempo, e cada uma entrega a vistoria e o as-built de um jeito. Sem formulário padronizado, fotos obrigatórias e revisão, consolidar e conferir o que foi entregue vira trabalho à parte."
  - titulo: "Dado de rede sem proteção"
    texto: "A localização de sites, equipamentos e rotas de fibra é informação estratégica e de infraestrutura crítica. Fotos e planilhas espalhadas em celulares pessoais e grupos de mensagem deixam esses dados sem controle de acesso e expostos se um aparelho for perdido."

passosLead: "Operadoras, torreiras, provedores de internet e empreiteiras podem montar o formulário de cada serviço, organizar as equipes, coletar os dados em campo e revisar os registros antes de exportá-los. Tudo em um único fluxo."
passos:
  - titulo: "Configure o formulário"
    texto: "Monte o formulário de vistoria de site, cadastro de fibra ou auditoria de postes com os campos, regras e fotos obrigatórias da sua operação, ou gere a partir de uma camada do seu ArcGIS. Se preferir, descreva o serviço e use a IA para gerar o formulário."
    lista:
      - "Campos de texto, número, foto, áudio e geometria"
      - "Formulário gerado por IA a partir de uma descrição"
      - "Campos obrigatórios e regras de validação"
      - "Versionamento com histórico de alterações"
  - titulo: "Organize a equipe"
    texto: "Convide técnicos próprios e de empreiteiras, defina permissões e atribua cada formulário a seu responsável."
    lista:
      - "Perfis de coletor, revisor e gestor"
      - "Convite por e-mail ou link"
      - "Formulários atribuídos por pessoa"
      - "Produção individual acompanhada em tempo real"
  - titulo: "Colete dados em campo"
    texto: "Registre sites, torres, caixas, postes e traçados de fibra com fotos e geometrias pelo aplicativo, com as camadas da sua rede no mapa. Sem sinal, tudo fica criptografado no aparelho até a sincronização."
    lista:
      - "Pontos, linhas e polígonos no mesmo mapa"
      - "Coleta offline e criptografada no aparelho"
      - "Precisão centimétrica com GNSS externo"
      - "Sincronização automática"
  - titulo: "Revise, valide e exporte"
    texto: "Os registros passam por uma etapa de revisão antes da exportação. Quando necessário, o revisor devolve o registro ao técnico ou à empreiteira com comentário para correção."
    lista:
      - "Fila de revisão por projeto"
      - "Aprovação ou devolução com comentário"
      - "Exportação em CSV, GeoJSON e Shapefile"

camposTitulo: "Campos para vistoria e cadastro de redes de telecom"
campos:
  - "ID do site"
  - "Tipo de estrutura"
  - "CTO / caixa de emenda"
  - "Ocupação do poste"
  - "Traçado da fibra"
  - "Fotos (mín. 3)"

faqTitulo: "Perguntas frequentes sobre coleta de dados em campo para telecom"
faq:
  - q: "Como fazer vistoria de sites e torres de telecom com formulário digital?"
    a: |-
      Para fazer a vistoria de um site com formulário digital, configure os campos de acordo com o checklist da operação, incluindo identificação do site, tipo de estrutura, estado dos equipamentos, ocorrências e as fotos obrigatórias de cada item.

      No TerraNode, cada vistoria fica em um registro com coordenada, fotos, data, hora e responsável, formando o histórico do site entre uma visita e outra.
  - q: "Como cadastrar uma rede de fibra óptica em campo?"
    a: |-
      O cadastro de rede de fibra registra a posição e as características de cada elemento, como postes, caixas de emenda, CTOs e reservas técnicas, além do traçado dos cabos.

      No TerraNode, a equipe registra os pontos e desenha o traçado como linha no mapa, com fotos e atributos em cada registro, inclusive sem conexão.
  - q: "Dá para fazer auditoria de ocupação de postes?"
    a: |-
      Sim. Monte um formulário com a identificação do poste, os ocupantes, os cabos e equipamentos encontrados e fotos de cada lado, e atribua as rotas às equipes de campo.

      Os registros passam por revisão antes de serem exportados, o que ajuda a entregar um levantamento consistente para a conciliação com a distribuidora.
  - q: "O TerraNode tem modelos prontos para telecom?"
    a: |-
      Ainda não há templates específicos para telecom. Os formulários são montados do zero em poucos minutos, a partir de uma camada do ArcGIS ou descrevendo o serviço para a IA gerar o rascunho.
  - q: "O TerraNode funciona com ArcGIS?"
    a: "Sim. O TerraNode se integra ao ArcGIS Online e ao ArcGIS Enterprise: as camadas da sua rede vão para o mapa de campo com a simbologia, e os dados validados são exportados em CSV, GeoJSON e Shapefile."
  - q: "O que acontece com os dados se o aparelho for roubado ou perdido?"
    a: |-
      Os registros coletados no TerraNode ficam criptografados no próprio aparelho e voltam ao servidor também criptografados. Quem tiver acesso ao celular não consegue ler os dados da rede fora do aplicativo.

      Os dados pertencem à sua organização e ficam armazenados no Brasil, com LGPD por arquitetura.
  - q: "O TerraNode funciona sem sinal de celular?"
    a: "Sim. A equipe preenche formulários e registra fotos, áudios e geometrias sem conexão, em sites rurais, no alto de morros e em áreas de sombra de cobertura, e tudo é sincronizado automaticamente quando o sinal retorna."
  - q: "O TerraNode reduz o custo da operação?"
    a: |-
      Sim. Formulários padronizados, fotos obrigatórias e revisão antes da exportação reduzem a redigitação, as entregas incompletas de empreiteiras e as revisitas para conferir informações.

      Além disso, como uma solução brasileira, nossa plataforma trabalha com valores em reais e abaixo da concorrência.
---

## Coleta de dados em campo para operadoras, torreiras e provedores de internet

Em uma rede de telecom, cada elemento precisa estar no lugar certo do cadastro: o site com seus equipamentos, o poste com seus ocupantes, a caixa de emenda com suas fibras. É esse cadastro que sustenta a manutenção, a viabilidade de novos clientes e o planejamento da expansão.

Na **vistoria de sites e torres**, o trabalho envolve checar estruturas, equipamentos e ocorrências, com fotos obrigatórias de cada item.

No **cadastro de rede de fibra**, envolve registrar postes, caixas de emenda, CTOs, reservas técnicas e o traçado dos cabos.

No **levantamento para implantação de site** e na **auditoria de ocupação de postes**, abrange condições do local, acessos, ocupantes e evidências fotográficas.

E muitos desses lugares ficam justamente onde o sinal é fraco.

### Um padrão único para todas as equipes e empreiteiras

Com o TerraNode, a operação define o formulário de cada serviço, com campos, regras e fotos obrigatórias, e atribui o trabalho a equipes próprias e de empreiteiras. Cada registro passa por revisão antes de ser exportado, e o que estiver incompleto volta ao técnico com comentário.

### Pontos, linhas e a rede do seu ArcGIS no mapa

Sites, caixas e postes entram como pontos, e o traçado da fibra como linha, no mesmo mapa. As camadas da rede que já estão no **ArcGIS Online** ou no **ArcGIS Enterprise** da organização chegam ao aplicativo com a simbologia, ficam disponíveis sem conexão e podem ser sincronizadas de novo sempre que a rede mudar.

### Dados da rede protegidos no aparelho

No TerraNode, cada registro é criptografado no próprio aparelho no momento da coleta e continua criptografado no caminho até o servidor. Se um celular for perdido ou roubado, os dados da rede não ficam legíveis fora do aplicativo.

**Conheça as soluções do TerraNode para outras operações:** [energia](/solucoes/energia/), [topografia e cadastro](/solucoes/topografia-e-cadastro/), [municípios](/solucoes/municipios/), [saneamento e obras](/solucoes/saneamento-e-obras/) e [meio ambiente](/solucoes/meio-ambiente/).

**Para conhecer outros recursos de configuração, acesse:** [formulários](/recursos/formularios/) e [catálogos](/recursos/catalogos/).

> **Atenção às normas e aos procedimentos:** cada operação deve observar os requisitos técnicos e legais aplicáveis. No Brasil, isso inclui a [Lei Geral de Telecomunicações (Lei nº 9.472/1997)](https://www.planalto.gov.br/ccivil_03/leis/l9472.htm), que criou a [Anatel](https://www.gov.br/anatel/pt-br), a [Lei nº 13.116/2015](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13116.htm), que traz regras gerais para a instalação e o compartilhamento de infraestrutura de telecomunicações, e as regras de compartilhamento de postes definidas pela ANEEL e pela Anatel.
>
> O **TerraNode** pode apoiar o registro e a organização das informações de campo, mas o atendimento às normas depende também dos procedimentos, da responsabilidade técnica e das exigências dos órgãos reguladores em cada caso.
