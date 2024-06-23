// Template string é usando para usar código JS dentro de uma string, utilizando o sinal de crase como delimitador
// dentro das crases vc pode utilizar expressões ou referenciar variáveis sem precisar contatenar

let a = 5;
let b = 8;

console.log("a = " + a + ", b = " + b)

//usando template string

console.log(`a = ${a} b = ${b}`)

//A sintaxe é ` ${} ` tudo que esta dentro dos chaves será interpretado como código e se for uma variável, fará referência a ela