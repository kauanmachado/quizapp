export const questions = [
  {
    question: "O que é uma variável em programação?",
    options: [
      "Um espaço nomeado que armazena um valor",
      "Uma função que altera dados",
      "Um tipo de loop",
      "Um comentário no código"
    ],
    answer: 0,
    explanation: "Variável é um identificador que referencia um valor armazenado na memória."
  },
  {
    question: "Qual operação atribui um valor a uma variável?",
    options: [
      "==",
      "=",
      "=>",
      "==="
    ],
    answer: 1,
    explanation: "O operador '=' atribui (armazena) o valor à variável."
  },
  {
    question: "Qual dos tipos abaixo não é primitivo em muitas linguagens?",
    options: [
      "Número",
      "Booleano",
      "Objeto",
      "Texto"
    ],
    answer: 2,
    explanation: "Objeto é uma estrutura composta; números, booleanos e textos (strings) são tipos primitivos."
  },
  {
    question: "Em JavaScript, qual declaração cria uma variável que não pode ser reatribuída?",
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    answer: 2,
    explanation: "const define uma referência que não pode ser reatribuída (imutabilidade da referência)."
  },
  {
    question: "O que significa 'escopo local' de uma variável?",
    options: [
      "A variável existe em todo o programa",
      "A variável existe apenas dentro de uma função ou bloco",
      "A variável é armazenada em disco",
      "A variável é pública para todos os módulos"
    ],
    answer: 1,
    explanation: "Escopo local indica que a variável só é acessível dentro do bloco/função onde foi declarada."
  },
  {
    question: "Qual estrutura é usada para executar código condicionalmente se uma condição for verdadeira?",
    options: [
      "for",
      "while",
      "if",
      "switch"
    ],
    answer: 2,
    explanation: "if avalia uma expressão booleana e executa um bloco quando a condição é verdadeira."
  },
  {
    question: "Como você verifica múltiplas condições em cadeia (A então B então C)?",
    options: [
      "if / else if / else",
      "for / break / continue",
      "try / catch / finally",
      "switch / case / default"
    ],
    answer: 0,
    explanation: "Uso de if seguido de else if permite testar várias condições em sequência."
  },
  {
    question: "O operador '===' difere de '==' em que?",
    options: [
      "Não há diferença",
      "=== compara tipo e valor; == faz coerção de tipo",
      "== compara tipo e valor; === faz coerção",
      "Um é lógico e outro é aritmético"
    ],
    answer: 1,
    explanation: "=== exige igualdade estrita sem conversão de tipos; == pode converter tipos antes de comparar."
  },
  {
    question: "Qual operador lógico resulta verdadeiro se ambas as condições forem verdadeiras?",
    options: [
      "|| (OU)",
      "&& (E)",
      "! (NÃO)",
      "^ (XOR)"
    ],
    answer: 1,
    explanation: "&& (E lógico) retorna verdadeiro somente quando todas as condições são verdadeiras."
  },
  {
    question: "Quando é útil usar 'switch' em vez de vários 'if/else'?",
    options: [
      "Para avaliar muitas condições sobre o mesmo valor",
      "Para substituir loops",
      "Para tratar erros",
      "Para declarar variáveis"
    ],
    answer: 0,
    explanation: "switch é prático quando se compara um mesmo valor a várias opções (cases)."
  }
];
