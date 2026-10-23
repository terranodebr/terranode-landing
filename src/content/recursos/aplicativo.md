---
title: "Aplicativo de coleta de dados em campo, offline · TerraNode"
description: "App nativo para Android que coleta dados em campo sem internet: formulários, fotos, GPS e mapas do projeto no aparelho, com sincronização automática quando o sinal volta."
recurso: "Aplicativo"
h1: "Colete no campo, mesmo sem sinal. O TerraNode sincroniza quando a conexão volta."
subtitulo: "Um aplicativo nativo para Android, feito para a equipe de campo: baixe o projeto, colete o dia inteiro offline e envie os dados quando houver internet. iOS em breve."
ordem: 4
draft: true

secoes:
  - id: offline
    eyebrow: "OFFLINE DE VERDADE"
    titulo: "O projeto inteiro no aparelho"
    itens:
      - titulo: "Baixe o projeto antes de sair."
        texto: "Formulários, mapa e camadas descem juntos em um pacote. Depois disso, o app funciona sem internet, do primeiro registro ao último."
      - titulo: "O mapa do projeto vai junto."
        texto: "As camadas do projeto e, se a versão incluir, o mapa base ficam no aparelho e abrem sem conexão. Cada camada pode ser ligada ou desligada."
      - titulo: "Download que não recomeça do zero."
        texto: "O pacote baixa em segundo plano, pausa quando a conexão cai e continua de onde parou. Numa atualização, só descem os arquivos que mudaram."
      - titulo: "Consulta de área sem internet."
        texto: "O campo de consulta mostra, no próprio aparelho, a área do projeto onde está o ponto coletado, como o talhão, o bairro ou o lote."
      - titulo: "Sempre sabe se está online."
        texto: "Um indicador Online ou Offline fica no topo de todas as telas, e os projetos já baixados continuam na lista sem conexão."

  - id: coleta
    eyebrow: "COLETA SIMPLES"
    titulo: "Toque em Coletar e preencha"
    itens:
      - titulo: "O formulário certo, a um toque."
        texto: "Os formulários vêm do painel web com o projeto. Quando há mais de um, o app lembra a última escolha de cada pessoa."
      - titulo: "Texto e escolha"
        texto: "Texto curto · Texto longo · Escolha única · Múltipla escolha · Sim ou não"
      - titulo: "Contato e documentos"
        texto: "E-mail · Telefone · CEP · CPF ou CNPJ · RG"
      - titulo: "Números e datas"
        texto: "Número · Contador · Moeda em R$ · Data · Data e hora · Hora"
      - titulo: "Localização"
        texto: "Ponto pelo GPS · Local do envio · Consulta de área"
      - titulo: "Mídia"
        texto: "Fotos · Vídeo · Áudio · Assinatura"
      - titulo: "Código de barras"
        texto: "QR Code · EAN-13 · 13 formatos · Leitura offline"
      - titulo: "Validado na hora."
        texto: "CPF e CNPJ com dígito verificador, telefone e CEP com máscara, limites de número e data. O envio só libera com os obrigatórios preenchidos."
      - titulo: "Só aparece o que importa."
        texto: "Perguntas condicionais aparecem ou somem conforme as respostas, e o que fica escondido não é enviado."
    nota: "Fotos e vídeos guardam a posição do GPS no momento da captura. Cada registro recebe um número por formulário, para a equipe se referir a ele."

  - id: sessao
    eyebrow: "SESSÃO DE CAMPO"
    titulo: "O dia de trabalho, do início ao fim"
    itens:
      - titulo: "Inicie a sessão de campo."
        texto: "Um toque em Iniciar sessão de campo e o app passa a registrar o trajeto. A sessão continua com a tela desligada e até com o app fechado."
      - titulo: "O trajeto da equipe."
        texto: "A posição é gravada em intervalos, descartando leituras imprecisas, e chega ao painel junto com os registros."
      - titulo: "Seus registros no mapa."
        texto: "Cada registro com posição vira um marcador no mapa do projeto. Toque nele para abrir o registro."
      - titulo: "Precisão à vista."
        texto: "O campo de localização mostra a precisão do GPS em metros antes de você salvar."
      - titulo: "Aviso de localização desligada."
        texto: "Se o GPS do aparelho for desligado no meio da sessão, o app avisa e leva direto à configuração."

  - id: sincronizacao
    eyebrow: "SINCRONIZAÇÃO"
    titulo: "Conectou, enviou"
    itens:
      - titulo: "Sem botão para lembrar."
        texto: "Com sinal, os registros sobem sozinhos: a cada registro salvo, ao encerrar a sessão e ao abrir o app. Sem sinal, esperam no aparelho."
      - titulo: "Envio em segundo plano."
        texto: "As respostas sobem por trás, sem interromper a coleta, e durante a sessão o app volta a tentar em intervalos."
      - titulo: "Reenviar não duplica."
        texto: "Cada registro tem uma identidade criada no aparelho. Se a conexão cai no meio do envio, o app manda de novo e o servidor reconhece o que já recebeu."
      - titulo: "Conferido na chegada."
        texto: "Cada registro leva uma soma de verificação, e o servidor confirma um por um. O que fica sem resposta é enviado de novo."
      - titulo: "Cada registro mostra o seu estado."
        texto: "Enviada, Enviada · mídia pendente, Não enviada ou Recusada, com o motivo da recusa."
      - titulo: "Fotos e vídeos com Enviar dados."
        texto: "As mídias, mais pesadas, ficam no aparelho até você tocar em Enviar dados no mapa do projeto, por exemplo no Wi-Fi do escritório. Os registros vão primeiro, depois os arquivos."
      - titulo: "Upload que retoma."
        texto: "Se a conexão cai, o envio continua de onde parou. Cada arquivo é conferido no servidor ao final."
      - titulo: "Aguardando conexão."
        texto: "O envio segue em segundo plano, com o progresso na notificação, e espera a internet voltar se ela cair."

  - id: seguranca
    eyebrow: "SEUS DADOS NO APARELHO"
    titulo: "Guardados com criptografia, até o envio"
    itens:
      - titulo: "Banco de dados criptografado."
        texto: "Respostas, fotos, vídeos e áudios ficam criptografados no aparelho, com as chaves no armazenamento seguro do Android."
      - titulo: "Um aparelho, várias pessoas."
        texto: "Cada pessoa que entra no app tem os seus próprios dados, separados e criptografados."
      - titulo: "Fora do backup na nuvem."
        texto: "Os dados de campo não vão para o backup automático do aparelho."
      - titulo: "Atualizar o app não apaga nada."
        texto: "Uma nova versão do app nunca descarta registros que ainda estão no aparelho."

complemento:
  eyebrow: "DEPOIS DO ENVIO"
  titulo: "Do aparelho para o painel da equipe"
  texto: "Os registros, as fotos e o trajeto de cada pessoa aparecem no mapa do projeto no painel web, e a visão geral mostra quanto cada um coletou, o último envio e a última posição. Os formulários usados no app são montados no próprio painel."

fechamento:
  titulo: "Leve o projeto para onde o sinal não chega."
  texto: "Lançamento em breve. Entre na lista para ser avisado, ou candidate-se a early tester e ajude a definir o que entra primeiro."
  pontos:
    - "Projeto, mapa e camadas offline no aparelho."
    - "Formulários com fotos, GPS, assinatura e código de barras."
    - "Sincronização automática quando a conexão volta."
    - "Dados criptografados até o envio."
---
