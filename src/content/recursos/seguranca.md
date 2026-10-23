---
title: "Segurança, criptografia e LGPD na coleta de campo · TerraNode"
description: "Dados de campo criptografados no aparelho, na transmissão e no servidor, com banco e arquivos hospedados em São Paulo e isolamento por organização no próprio banco de dados."
recurso: "Segurança e LGPD"
h1: "Seus dados protegidos do campo ao painel. Criptografados e hospedados no Brasil."
subtitulo: "Levantamentos de campo guardam informação sobre pessoas, imóveis e território. O TerraNode protege esses dados no celular, no caminho até o servidor e no servidor, que fica em São Paulo."
ordem: 5
draft: true

secoes:
  - id: criptografia
    eyebrow: "CRIPTOGRAFIA"
    titulo: "Protegidos em cada etapa"
    itens:
      - titulo: "Do aparelho ao servidor, nada viaja aberto."
        texto: "Os registros ficam criptografados no celular enquanto esperam o envio, sobem por conexão segura e são guardados criptografados no servidor."
      - titulo: "No aparelho"
        texto: "As respostas ficam em um banco de dados criptografado, e fotos, vídeos e áudios são cifrados com AES-256 assim que são capturados. As chaves ficam no armazenamento seguro do Android, e cada pessoa que entra no app tem as suas."
      - titulo: "Na transmissão"
        texto: "O aplicativo e o painel web só falam com o servidor por HTTPS. Endereços sem criptografia são redirecionados, e o navegador é instruído a nunca usar conexão aberta (HSTS)."
      - titulo: "No servidor"
        texto: "O banco de dados e os arquivos ficam criptografados em repouso na infraestrutura do Google Cloud. O banco não tem endereço público: só a aplicação, dentro da rede privada, chega até ele."
      - titulo: "Senhas nunca guardadas."
        texto: "O servidor guarda apenas um resumo criptográfico (hash) de cada senha, nunca a senha em si."
      - titulo: "Acesso do app protegido."
        texto: "A chave de acesso do aplicativo fica cifrada no aparelho, e o servidor guarda só o hash dela. Ao sair da conta, o app pede ao servidor que a revogue."
      - titulo: "Credenciais de integração cifradas."
        texto: "Credenciais do ArcGIS e do Google ficam cifradas no banco, com chaves que podem ser trocadas, e nunca voltam para a tela."

  - id: residencia
    eyebrow: "DADOS NO BRASIL"
    titulo: "Hospedado em São Paulo"
    itens:
      - titulo: "Seus dados de campo moram no Brasil."
        texto: "O banco de dados e os arquivos do TerraNode ficam na região de São Paulo do Google Cloud, a mesma onde rodam os servidores da aplicação."
      - titulo: "Banco geoespacial em São Paulo."
        texto: "Registros, respostas, trajetos e camadas ficam em PostgreSQL com PostGIS, hospedado na região de São Paulo."
      - titulo: "Arquivos em São Paulo."
        texto: "Fotos, vídeos, áudios e os pacotes que o aplicativo baixa ficam no armazenamento da mesma região."
      - titulo: "Réplica em outra zona."
        texto: "O banco tem uma cópia em espera em uma segunda zona da região, pronta para assumir se a principal falhar."
      - titulo: "Recuperação a qualquer momento."
        texto: "Backups contínuos permitem voltar o banco a qualquer ponto dos últimos 7 dias."

  - id: lgpd
    eyebrow: "LGPD POR ARQUITETURA"
    titulo: "Cada organização vê só os seus dados"
    itens:
      - titulo: "A separação está no próprio banco de dados."
        texto: "Toda tabela com dados de uma organização tem uma regra de acesso no banco que só devolve as linhas daquela organização, e a aplicação se conecta com um usuário que não consegue ignorar essa regra."
      - titulo: "Papéis por organização."
        texto: "Cada pessoa entra como dono, editor ou equipe de campo, e vê e faz só o que o seu papel permite."
      - titulo: "Arquivos sem link público."
        texto: "Fotos, vídeos e pacotes privados são abertos por links assinados que expiram em pouco tempo."
      - titulo: "Histórico do projeto."
        texto: "A atividade do projeto fica registrada, com quem fez, de qual aparelho e quando. O histórico não é editado e pode ser exportado em CSV."
      - titulo: "Separados no aparelho."
        texto: "Num celular compartilhado, cada pessoa tem os seus dados, cifrados com as suas próprias chaves."
    nota: "Os dados de campo não entram no backup automático do Android nem na transferência para outro aparelho: as chaves ficam presas ao celular onde foram criadas."

complemento:
  eyebrow: "NO CAMPO"
  titulo: "Seguro também sem sinal"
  texto: "O aplicativo guarda tudo criptografado enquanto a equipe coleta offline e envia sozinho quando a conexão volta. Veja como funciona a coleta no aparelho."

fechamento:
  titulo: "Colete com a tranquilidade de saber onde seus dados estão."
  texto: "Lançamento em breve. Entre na lista para ser avisado, ou candidate-se a early tester e ajude a definir o que entra primeiro."
  pontos:
    - "Criptografia no aparelho, na transmissão e no servidor."
    - "Banco e arquivos hospedados em São Paulo."
    - "Isolamento por organização no próprio banco de dados."
    - "Papéis de acesso e histórico de cada projeto."
---
