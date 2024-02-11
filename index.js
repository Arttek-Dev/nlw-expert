const perguntas = [
  {
    pergunta: "Qual é o resultado da expressão '3 + 5' em JavaScript?",
    respostas: [
      "8",
      "35",
      "53"
    ],
    correta: 0
  },
  {
    pergunta: "Como se chama o operador usado para concatenar strings em JavaScript?",
    respostas: [
      "'+'",
      "'-'",
      "'*'"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '10 == '10' em JavaScript?",
    respostas: [
      "true",
      "false",
      "undefined"
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que é passada como argumento para outra função e é executada após um evento",
      "Uma função que não possui retorno",
      "Uma função que retorna outra função"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
    respostas: [
      "Selecionar o primeiro elemento que corresponde a um seletor CSS especificado",
      "Selecionar todos os elementos que correspondem a um seletor CSS especificado",
      "Selecionar o último elemento que corresponde a um seletor CSS especificado"
    ],
    correta: 0
  },
  {
    pergunta: "O que é o evento 'DOMContentLoaded' em JavaScript?",
    respostas: [
      "Um evento acionado quando o navegador termina de carregar um documento HTML",
      "Um evento acionado quando um elemento HTML é clicado",
      "Um evento acionado quando o usuário rola a página"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'preventDefault()' em um evento JavaScript?",
    respostas: [
      "Impedir o comportamento padrão de um evento, como a submissão de um formulário ao clicar em um botão",
      "Cancelar a propagação de um evento para elementos pai",
      "Remover um manipulador de evento de um elemento"
    ],
    correta: 0
  },
  {
    pergunta: "O que é o método 'fetch()' em JavaScript?",
    respostas: [
      "Um método para buscar arquivos locais no sistema de arquivos do usuário",
      "Um método para fazer requisições HTTP assíncronas",
      "Um método para buscar elementos HTML por meio de um seletor CSS"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função da propriedade 'innerHTML' em JavaScript?",
    respostas: [
      "Modificar o conteúdo textual de um elemento HTML",
      "Modificar a classe CSS de um elemento HTML",
      "Modificar o estilo CSS de um elemento HTML"
    ],
    correta: 0
  },
  {
    pergunta: "O que é o método 'addEventListener()' em JavaScript?",
    respostas: [
      "Um método para adicionar uma função de retorno de chamada a ser executada quando um evento ocorre em um elemento HTML",
      "Um método para adicionar uma classe CSS a um elemento HTML",
      "Um método para adicionar um estilo CSS a um elemento HTML"
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}