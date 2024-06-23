//essa estrutura de repetição funciona com múltiplas possibilidades de resultado, lembrando que o código será executado até o fim
//mesmo quando um resultado satisfaça a expressão, caso o break não seja utilizado.

let nota = 12;

switch(Math.ceil(nota))    // a função Math.ceil arrendonda o valor do argumento utilizado na variável para o menor número inteiro após o valor declarado (10.1 arred.  para 11)
{
    case 10:
    case 9:
    case 8:
    case 7:
        console.log("Parabéns!");
        break   
    case 6:
    case 5:
        console.log("Recuperação!");
        break
    case 4:
    case 3:
    case 2:
        console.log("Reprovado!")
        break
    case 1:
    case 0:
        console.log("Muito Reprovado!");
        break
    default :                               //defaut é a sáida caso a nota informada seja diferente de todos os cases
        console.log("Nota Inválida!")

}