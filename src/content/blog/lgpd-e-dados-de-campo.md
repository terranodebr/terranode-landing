---
title: "LGPD e dados de campo: transferência internacional e onde guardar · TerraNode"
description: "A LGPD não obriga a guardar dados no Brasil, mas cobra caro de quem manda dado de campo para fora sem contrato. Veja o que muda na coleta."
h1: "LGPD e dados de campo: por que importa onde eles ficam"
subtitulo: "O que vira dado pessoal numa coleta, o que a lei cobra quando o dado sai do país e o que fazer antes de mandar a equipe a campo."
categoria: engenharia
autor: bruno-lima
publicadoEm: 2026-11-11
draft: true
capa:
  src: "../../assets/blog/lgpd-e-dados-de-campo/capa.webp"
  alt: "Técnico de campo de colete refletivo, de costas, fotografando com o celular uma rua de terra com casas simples, muros, um carro parado e roupa no varal"
convite:
  titulo: "Sua próxima campanha com o dado no Brasil e criptografado desde o celular"
  texto: "O TerraNode está em beta fechado com equipes de campo selecionadas. Entre na lista e escolha: só o aviso do lançamento ou uma vaga entre os early testers, coletando antes de todo mundo."
recursos: [seguranca, aplicativo]
setores: [topografia-e-cadastro, meio-ambiente]
---

Um técnico volta do campo com 300 pontos, 900 fotos e uma dúzia de áudios no celular. Entre esses arquivos há nomes de moradores, fachadas de casas, placas de carro e coordenadas de residências. A campanha pode ter acabado para a equipe de campo, mas a responsabilidade sobre esses dados está apenas começando.

A LGPD acompanha o dado durante todo o percurso. Ela importa quando a empresa decide o que perguntar, enquanto o registro está no celular e depois que ele chega ao servidor. Guardar os dados no Brasil não é uma obrigação da lei. É uma forma de evitar a transferência internacional e os documentos exigidos por ela.

## Antes da saída, decida o que realmente precisa ser coletado

Para a LGPD, dado pessoal é qualquer informação relacionada a uma pessoa natural identificada ou identificável. O [guia da ANPD para o cidadão](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/documentos-de-publicacoes/guia-do-consumidor_como-proteger-seus-dados-pessoais-final.pdf) inclui a geolocalização de um celular entre os exemplos.

![Ilustração de uma rua vista de cima. Os pinos no poste e no bueiro são cinza; os pinos nas casas são laranja e ligados a ícones de pessoa, câmera e microfone](../../assets/blog/lgpd-e-dados-de-campo/dado-pessoal.webp)

A coordenada de um poste, sozinha, não identifica uma pessoa. A coordenada de uma casa ligada ao nome do morador, sim. A mesma diferença vale para uma foto de fachada, um áudio de entrevista ou um cadastro de imóvel. O conteúdo e o contexto determinam se aquele registro entra na LGPD.

O trajeto gravado durante o dia também merece atenção: ele é um dado pessoal do próprio funcionário. E cadastros socioeconômicos podem ir além, com perguntas sobre saúde, religião ou origem étnica. Esses dados são sensíveis e recebem proteção mais rígida.

Por isso a primeira decisão acontece ainda no formulário. Se o projeto não precisa de CPF, rosto ou placa de carro, esses dados não devem ser coletados só por precaução. Limitar o formulário reduz o volume de informação que a equipe terá de proteger depois.

## No campo, o dado está nas mãos de alguém

Sem sinal, as respostas e as fotos ficam no aparelho. Nesse momento, o risco mais provável não é um ataque sofisticado. É o celular esquecido na caminhonete, emprestado sem bloqueio ou perdido durante o deslocamento.

![Celular esquecido no painel empoeirado de uma caminhonete, ao lado de uma prancheta e de um par de luvas, parada numa estrada de terra no cerrado](../../assets/blog/lgpd-e-dados-de-campo/celular-esquecido.webp)

Se um aparelho com cadastros de moradores some e os arquivos podem ser abertos, a empresa precisa tratar o caso como um incidente de segurança. Quando há risco relevante para as pessoas, a [Resolução 15 da ANPD](https://www.serpro.gov.br/menu/noticias/noticias-2025/incidentes-seguranca-dados-pessoais) estabelece três dias úteis para comunicar a autoridade e os titulares, com mais vinte dias úteis para completar as informações. Para agentes de pequeno porte, os prazos [contam em dobro](https://confidata.com.br/blog/comunicacao-incidente-seguranca-anpd).

Três dias úteis é pouco para começar procurando uma planilha que diga o que havia no celular. No TerraNode, o conteúdo coletado fica criptografado no aparelho, inclusive durante o trabalho offline. A criptografia não elimina o incidente nem as obrigações da empresa, mas impede que alguém leia os arquivos apenas por ter encontrado o telefone.

Segurança inadequada e demora na comunicação têm consequências. A multa simples do [artigo 52](https://confidata.com.br/blog/lgpd-comentada-25-sancoes-administrativas) pode chegar a 2% do faturamento no Brasil, limitada a R$ 50 milhões por infração. Entre as falhas já punidas pela ANPD estão [não comunicar incidentes e não adotar medidas de segurança adequadas](https://turivius.com/portal/multas-da-lgpd/).

## Quando o sinal volta, importa saber para onde o dado vai

A LGPD não exige que os servidores estejam no Brasil. A lei continua valendo para dados de pessoas no país, esteja o servidor onde estiver, e o artigo 33 permite a transferência internacional em hipóteses específicas. O ponto é saber que a transferência existe e ter o mecanismo jurídico necessário.

Em agosto de 2024, a ANPD publicou a [Resolução 19](https://www.demarest.com.br/anpd-aprova-o-regulamento-de-transferencia-internacional-de-dados/), com o regulamento e as cláusulas padrão contratuais. O prazo de adaptação [terminou em 23 de agosto de 2025](https://www.mayerbrown.com/pt/insights/publications/2025/08/end-of-grace-period-implementation-of-brazils-standard-contractual-clauses-in-international-transfers-of-personal-data). Em janeiro de 2026, a ANPD [reconheceu a União Europeia](https://www.globalsuitesolutions.com/pt/?p=117782) como destino com proteção adequada. Para outros países, como os Estados Unidos, as cláusulas continuam sendo um dos caminhos usuais.

![Mapa escuro com pontos de coleta ligados, em laranja, a um servidor dentro do Brasil. Do mesmo servidor saem linhas tracejadas para servidores nos Estados Unidos e na Europa, cada um com um documento ao lado](../../assets/blog/lgpd-e-dados-de-campo/transferencia-internacional.webp)

Se o aplicativo envia os registros para um servidor no exterior, quem contratou o serviço precisa saber disso, ter o contrato adequado e conseguir explicar a transferência. Quando o dado trafega e fica no Brasil, sem outro agente de tratamento no exterior, essa etapa não existe.

Ainda assim, a localização do servidor não encerra a análise. É preciso perguntar onde ficam os backups, quais terceiros têm acesso e se algum serviço usado pelo fornecedor processa os dados fora do país.

## No escritório, acesso e revisão precisam ter dono

Quando os dados chegam, nem toda pessoa da equipe precisa ver tudo. No TerraNode, os papéis de coletor, revisor e gestor limitam o acesso, e cada formulário pode ser atribuído às pessoas que vão usá-lo. A integração com o ArcGIS usa OAuth ou chave de API somente para leitura, sem pedir que a equipe compartilhe a senha do portal.

A revisão ajuda a separar o que foi conferido do que ainda precisa de decisão. Ela não impede que coletas pendentes ou rejeitadas sejam exportadas. O estado de revisão acompanha cada registro no GeoPackage, e a organização pode filtrar o que será entregue ao cliente. As coletas, os trajetos e as mídias também podem ser exportados para que os dados não fiquem presos à ferramenta.

Esses controles cobrem uma parte da responsabilidade. Nenhum aplicativo escolhe a base legal, avisa os moradores, define o prazo de retenção ou decide quem responde a um pedido do titular. Em geral, quem define o propósito da coleta atua como controlador, enquanto o fornecedor do aplicativo atua como operador. Os dois têm deveres de segurança, mas as decisões sobre a campanha continuam com a organização responsável pelo projeto.

A [página de segurança](/recursos/seguranca/) explica como o TerraNode protege o dado no aparelho, no envio e no armazenamento.

<!-- lista-de-espera -->

## Antes de a equipe entrar no carro

O técnico da abertura não deveria voltar com 900 fotos sem que alguém saiba por que elas foram coletadas, quem pode vê-las e onde serão armazenadas. Sete perguntas ajudam a fechar essas decisões antes da saída:

1. O formulário pede algum dado pessoal que o projeto não precisa?
2. Há dado sensível, como saúde, religião ou origem étnica? Ele é indispensável?
3. As fotos precisam mostrar rostos e placas, ou o enquadramento pode evitá-los?
4. Em que país ficam os servidores e os backups do aplicativo?
5. Se o celular sumir hoje, alguém consegue abrir os arquivos?
6. Quem na equipe enxerga cada formulário e cada coleta?
7. Quem comunica a ANPD e os titulares se algo der errado?

Responder a essas perguntas não resolve a conformidade inteira, mas evita descobrir as decisões mais importantes depois que os dados já estão espalhados entre celulares, mensagens e servidores.

## Fontes

- [Guia da ANPD: como proteger seus dados pessoais](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/documentos-de-publicacoes/guia-do-consumidor_como-proteger-seus-dados-pessoais-final.pdf)
- [Demarest: ANPD aprova o Regulamento de Transferência Internacional de Dados](https://www.demarest.com.br/anpd-aprova-o-regulamento-de-transferencia-internacional-de-dados/)
- [Mayer Brown: fim do período de adaptação da Resolução 19](https://www.mayerbrown.com/pt/insights/publications/2025/08/end-of-grace-period-implementation-of-brazils-standard-contractual-clauses-in-international-transfers-of-personal-data)
- [GlobalSuite: transferência internacional na LGPD e decisão sobre a União Europeia](https://www.globalsuitesolutions.com/pt/?p=117782)
- [Locaweb: LGPD e cloud, onde os dados precisam estar](https://www.locaweb.com.br/blog/temas/seguranca-digital/lgpd-cloud-computing-onde-dados-precisam-estar/)
- [Serpro: comunicação de incidentes de segurança](https://www.serpro.gov.br/menu/noticias/noticias-2025/incidentes-seguranca-dados-pessoais)
- [Confidata: comunicação de incidente à ANPD](https://confidata.com.br/blog/comunicacao-incidente-seguranca-anpd)
- [Confidata: sanções administrativas do artigo 52](https://confidata.com.br/blog/lgpd-comentada-25-sancoes-administrativas)
- [Turivius: multas da LGPD em 2026](https://turivius.com/portal/multas-da-lgpd/)
