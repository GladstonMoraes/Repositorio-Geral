/*
Esse exemplo demonstra o operador ternário "?" que também é conhecido como operador condicional
Ele funciona com uma saída pro caso da expressão ser verdadeira ou outra saída pro caso do resultado da expressão ser falso
podendo receber como condição pro valor falso, outro operador ternários e consequentemente mais duas saídas 
*/

const hora = 19;
const saudacao = hora <= 11 ? "Bom dia" : hora < 18 ? "Boa tarde" : hora > 23 ? "Boa Madrugada" : "Boa noite";
console.log(saudacao);