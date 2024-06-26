function sempreRetornaUm(){
    return 1;
}

function textoOuNumero(retornaTexto) {
    if(retornaTexto) {
        return "Sou Um Texto!";
    } else{
        return 123;
    }
}

let valor = sempreRetornaUm() + 1;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false))


/*
ainda não entendi bem o funcionamento dos parâmetros da função
*/