/* 
*Consiste em criar uma estrutura para realizar operações aritiméticas
*e para cada operação, criar em estrutura de controle
*/

const a = 10
const b = 28
const operacao = "%"

let resultado;

if (operacao === "*") {
    resultado = a * b
} else if (operacao === "+") {
    resultado = a + b 
} else if (operacao === "/") {
    resultado = a / b
} else if (operacao === "-") {
    operacao = a - b
} else resultado = a % b


console.log(resultado)