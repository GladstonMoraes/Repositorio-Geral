/*
O desafio consiste em criar condições para a medida que a variável seja alterada, a operação matemática
correspondente ao novo valor da variável seja executada, tudo isso utilizando o operador condicional

quando fui realizar o desafio, eu esqueci de usar a comparação estrita, para comparar o tipo de dado e obter o resultado esperado
*/

const a = 8;
const b = 4;
const operacao = "*"

const resultado =
             operacao === "+" ? a + b :
                operacao === "-" ?  a - b :
                     operacao === "*" ? a * b : a / b;
console.log(resultado);