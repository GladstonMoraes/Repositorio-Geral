// Exercício: criar a seguinte saída, utilizando laço For e Template string

// [1, 1] [1, 2] [1, 3]
// [2, 1] [2, 2] [2, 3]
// [3, 1] [3, 2] [3, 3]

for(let a = 1; a <=3; a++) {
    let linha = "";
    for( let b = 1; b <=3; b++) {
        linha += `[${a}, ${b}]`;
    }
    console.log(linha)
}

//não entendi bem o funcionamento desse código, mas pelo que entendi, assim que o valor da variável "a" passa ser = ', o laço interno é executado completo para
//poder voltar para o laço externo e a variável "a" passar a ser =2 e o laço interno ser executado completamente novamente

for(let a = 1; a <=3; a++) {
    let linha = "";
    for( let b = 1; b <=3; b++) {
        if(a !== b) {
            linha += `[${a}, ${b}]`;

        }   
    }
    console.log(linha)
}