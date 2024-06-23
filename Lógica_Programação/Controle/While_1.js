/*
*Entramos nas estruturas de repetição, e a primeita é o while (enquanto)
* a sintaxe é bem parecida com o "if", depois de declarada, ela espera uma expressão que se repete enquanto tiver retornando verdadeira, e quando passar a ser falsa
*vai passar para a próxima linha
* ela é uma função para uma quantidade de repetições INDETERMINADAS 
*/

let quantidade = 0

while(Math.random() < 0.9979) {             // a função de Math.random() serve para gerar um numero aleatório entre 0 e 1
    quantidade ++;                          // enquanto esse valor for menor que 0.9999 a expressão encrementa a variável, utilisando um operador unário
}                                           //para contar a quantidade de repetições usadasconsole.log("Qtde: " + quantidade);
console.log("Qtde: " + quantidade);