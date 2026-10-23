---
title: "Integre agentes de IA ao TerraNode pela linha de comando · TerraNode"
description: "Peça em português e deixe um agente de IA no terminal criar catálogos, enviar arquivos, convidar a equipe e gerar chaves de API pelo CLI tn do TerraNode."
recurso: "CLI e IA"
h1: "Peça em português. O agente de IA faz pelo terminal."
subtitulo: "O tn, a linha de comando do TerraNode, dá a qualquer agente de IA que roda comandos no terminal, como Claude Code, Codex ou Gemini CLI, o mesmo acesso que você tem: criar catálogos, enviar arquivos, convidar a equipe e gerar chaves de API."
ordem: 6
draft: true

secoes:
  - id: como-funciona
    eyebrow: "COMO FUNCIONA"
    titulo: "O agente usa o mesmo tn que você"
    itens:
      - titulo: "Sem plugin e sem integração especial."
        texto: "Tudo o que o agente faz passa pelo tn e pela mesma API pública do painel, com as permissões da conta ou da chave que ele usa."
      - titulo: "Saída que a IA lê"
        texto: "Com --json, cada comando devolve todos os campos em JSON, com datas em ISO 8601, prontos para o agente conferir o resultado."
      - titulo: "Erros claros"
        texto: "Quando algo falha, o tn escreve o motivo e termina com código 1. O agente percebe, explica o problema e tenta de outro jeito."
      - titulo: "Ajuda em cada comando"
        texto: "O agente descobre sozinho as opções de cada comando com tn <comando> --help, sem você precisar explicar a sintaxe."

  - id: exemplos
    eyebrow: "EXEMPLOS"
    titulo: "Do pedido ao recurso criado"
    itens:
      - titulo: "Crie um catálogo privado chamado Limites de fazendas 2026 e importe todos os .geojson da pasta levantamento."
        texto: "O agente cria o catálogo, envia cada arquivo, espera o processamento e lista as fontes de dados que surgiram."
      - titulo: "Convide as pessoas da planilha equipe.csv como equipe de campo."
        texto: "O agente lê os e-mails da planilha, envia os convites de uma vez e conta quem não pôde ser convidado."
      - titulo: "Gere uma chave de API para o pipeline que envia os levantamentos, válida por 90 dias."
        texto: "O agente cria a chave com papel de editor, sem trocar o login desta máquina, e lembra que o segredo aparece uma única vez."
      - titulo: "Quais envios falharam no catálogo estradas-municipais? Apague e reenvie."
        texto: "O agente lista os envios em JSON, encontra os que falharam, mostra o motivo, apaga cada um e reenvia o arquivo."

  - id: controle
    eyebrow: "CONTROLE"
    titulo: "Você decide o que o agente pode fazer"
    itens:
      - titulo: "Uma chave só para o agente."
        texto: "Em vez da sua senha, entregue ao agente uma chave de API criada com tn orgs api-keys create."
      - titulo: "Papel limitado."
        texto: "Com papel de editor, a chave cria catálogos e envia arquivos, mas não convida pessoas, não muda papéis e não cria outras chaves."
      - titulo: "Validade e revogação."
        texto: "A chave vale 365 dias por padrão, ou o prazo que você escolher, e pode ser revogada a qualquer momento com tn orgs api-keys revoke."
      - titulo: "Segredo fora do histórico."
        texto: "A chave entra pela variável de ambiente TN_TOKEN, sem aparecer no comando nem no histórico do terminal."
    nota: "O tn cuida de catálogos, envios, fontes de dados e da organização: membros, convites, chaves e aparelhos. Projetos, formulários e integrações continuam no painel web."

complemento:
  eyebrow: "ACESSO"
  titulo: "Liberado sob pedido"
  texto: "O tn ainda não está publicado no pip. Ele roda com Python 3.12 ou mais novo. Por enquanto, o acesso é liberado sob pedido."

fechamento:
  titulo: "Deixe o trabalho repetitivo com o agente."
  texto: "Lançamento em breve. Entre na lista para ser avisado, ou candidate-se a early tester e ajude a definir o que entra primeiro."
  pontos:
    - "Agentes de IA no terminal usam o tn como você."
    - "Catálogos, envios, convites e chaves por pedido em português."
    - "Saída em JSON e erros claros para o agente conferir."
    - "Chaves com papel, validade e revogação."
---
