/*
*A sintaxe do for permite que a variável seja declarada fora dos parenteses e que o incremento tbm seja fora
*só precisa que o ponto e vírgula esteja dentro do parentese
*/

;=//declarando tudo separado

let controle = 1;

for( ; controle <= 10 ;){ 
    console.log(controle)
    controle ++;
}

console.log("Fim");



//declarando com sintaxe correta

for(let controle2 = 1 ; controle2 <= 10 ; controle2 ++){
    console.log(controle2);
}

console.log("Fim!")