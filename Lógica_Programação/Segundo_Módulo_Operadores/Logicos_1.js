//Exemplos de operadores lógicos (E) e (OU) retornando os resultados conforme tabela verdade dos operadores


let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = "#1 (AND) - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = "#2 (OR) - Vai pro shopping? ";
resultadoOu += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu);

//Exemplo de Xor (ou exclusivo) onde ele compara se os valores são diferentes, podendo ser tbm comparados estritamente 
//para comparar tbm o tipo de dado, como está no exemplo

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

//Exemplo de negação Lógica, onde o resultado é simplesmente o contrário da afirmação (Operador unário)

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);


