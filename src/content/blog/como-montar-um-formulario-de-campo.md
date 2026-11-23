---
title: "Como montar um formulário de campo que valida na hora · TerraNode"
description: "Monte um formulário de coleta com campos que conferem CPF, limites e fotos no celular, e com perguntas que só aparecem quando fazem sentido."
h1: "O formulário que só pergunta o necessário"
subtitulo: "Da ficha de papel a um formulário que confere a resposta no campo e esconde as perguntas que não se aplicam."
categoria: how-tos
autor: george-silva
publicadoEm: 2026-11-12
draft: false
recursos: [formularios, aplicativo]
---

A ficha de papel pergunta tudo para todo mundo. O bloco do transformador está lá mesmo quando o poste não tem transformador, no campo de CPF cabe qualquer rabisco, e o "no mínimo três fotos" fica em uma linha que ninguém lê.

O custo aparece no escritório, onde alguém passa dias limpando os dados. O CPF veio com um dígito a menos, a altura do poste veio como 110 quando era 11,0, e metade das coletas tem uma foto só. Voltar a campo por causa de uma resposta mal preenchida custa mais que o levantamento inteiro daquele ponto.

Um bom formulário digital confere a resposta na hora, com o coletor ainda na frente do poste, e esconde as perguntas que não se aplicam. É esse formulário que montamos a seguir no TerraNode.

> O TerraNode está em beta fechado, e o app roda em Android 12 ou mais recente. Se a sua equipe ainda não tem acesso, [entre na lista de espera](https://form.typeform.com/to/ZVQYTFV5).

## Comece pelo que você já tem

Em **Formulários**, o botão **Novo formulário** oferece quatro pontos de partida. Você pode começar em branco, usar um template, importar do Survey123 ou partir de uma camada que já está no catálogo.

Essa última opção poupa muita digitação. Se você tem a camada de postes da concessionária, escolha **A partir de um datasource** e aponte para ela. O TerraNode cria um campo para cada coluna. Uma coluna de data vira um campo de data. Uma coluna de texto com poucos valores diferentes, como o material do poste, vira uma lista de escolha já preenchida com esses valores.

O resultado é um rascunho que você ainda vai ajustar, mas os nomes e os valores já são os dos seus dados.

## Troque texto livre por campos que conferem

O construtor tem 23 tipos de campo. O caminho mais curto para dados limpos é usar o tipo certo no lugar do texto livre.

O campo **CPF/CNPJ** confere os dígitos verificadores no celular, e um número inventado não passa. O **Telefone** confere o DDD. O **Código de barras / QR** lê a etiqueta com a câmera, sem internet, e acaba com o erro de digitação no código da amostra.

No **Numérico aberto**, você define a unidade, o mínimo, o máximo e as casas decimais. Fora do intervalo, o app avisa e não deixa enviar. Só que o campo nasce com mínimo 0 e máximo 100. Se a medida passa de 100, como uma altitude ou um diâmetro em milímetros, ajuste o máximo antes de publicar, ou o coletor vai encontrar **Fora do intervalo** no primeiro ponto do dia.

No campo **Fotos**, o "no mínimo três" da ficha vira regra. Defina **Mín. de fotos** e **Máx. de fotos**, e a coleta não sai sem elas. Por padrão o campo exige a posição de cada foto e só aceita a câmera, porque uma foto da galeria não traz posição.

Na **Escolha**, decida se a lista é fechada. Com **Permitir nova entrada** ligado, o coletor pode escrever uma opção que não está na lista. Isso ajuda no começo do projeto, quando você ainda não conhece todos os casos. Em uma lista que alimenta um relatório, desligue.

## Esconda o que não se aplica

Cada campo tem uma seção chamada **Mostrar quando...**. Nela você diz em que situação o campo aparece.

Pense na inspeção de um poste. A pergunta "Há dano?" é um campo de sim ou não. Os campos "Tipo de dano", "Severidade" e "Fotos do dano" recebem a condição de aparecer quando "Há dano?" é igual a Sim. Em um poste sem problema, o coletor responde uma pergunta e segue. Em um poste com problema, o formulário abre o bloco inteiro.

A pergunta que decide precisa ficar acima da pergunta que depende dela. Um campo obrigatório com condição só é obrigatório quando aparece, então dá para exigir as fotos do dano sem travar os postes bons. E, com mais de uma condição no mesmo campo, você escolhe entre **Todas valem** e **Qualquer uma vale**.

O formulário é uma lista corrida de campos, sem seções nem páginas, então a ordem importa. Ponha as perguntas na sequência em que o coletor anda em volta do objeto.

## Veja como o coletor vai ver

O botão **Visualizar** mostra o formulário como o app mostra. Dá para responder tudo, menos os campos que usam câmera, microfone ou GPS.

Responda como um coletor com pressa. Diga Sim e Não nas perguntas que abrem blocos e veja se o que aparece faz sentido. Digite um CPF errado. Tente um valor fora do limite. É mais barato tropeçar aqui do que no campo.

## Publique, e saiba o que trava depois

O botão **Publicar** salva o formulário. Cada publicação que muda os campos vira uma revisão numerada, e cada coleta guarda com qual revisão foi feita. Você pode ajustar o formulário no meio da campanha sem estragar o que já chegou. O TerraNode refaz o pacote offline dos projetos que usam o formulário, e a equipe vê **Atualização pendente** no app.

Depois da primeira coleta recebida, a **Chave** de cada campo, que é o nome da coluna nos dados, fica travada. E um campo não é mais removido. Ele é retirado, some do app e pode ser restaurado depois. Então acerte as chaves antes da primeira saída. Rótulos, limites e condições continuam livres.

## A ficha que encolheu

O formulário que sai daqui é mais curto no campo do que no papel, embora tenha as mesmas perguntas. O coletor só vê o que se aplica ao objeto na frente dele, e cada resposta já foi conferida quando ele toca em **Enviar**. O dia de limpeza no escritório fica para as exceções.

A referência de cada tipo, com as propriedades e os valores padrão, está em [tipos de campo](https://docs.terranode.com.br/formularios/tipos-de-campo/), e as regras das condições estão em [criar e editar formulários](https://docs.terranode.com.br/formularios/). Se o seu formulário já existe no Survey123, veja [como migrar sem redigitar](/blog/como-migrar-um-formulario-do-survey123/). A [página de Formulários](/recursos/formularios/) mostra o construtor em uso.
