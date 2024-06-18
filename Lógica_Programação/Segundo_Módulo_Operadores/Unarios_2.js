//Esse exemplo mostra a ordem de precendencia das operações, vemos que na exibição da linha 7
// a precedência do ++a é maior do que b++, fazendo com quê o resultado seja True
//isso se dá pq o encremento do b++ só acontece no fim da execução da sentença, portanto, quando a saída do console é exibida
//a variável "a" vale 2 e a variável "b" ainda vale 2, consequentemente tornando o resultado da comparação estrita, verdadeiro

let a = 1;
let b = 2;

console.log(++a === b++);
console.log(a === b);

