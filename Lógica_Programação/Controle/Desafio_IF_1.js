//Consiste em criar vários IF para mostrar conceitos diferentes conforme a nota que é declarada na variável
//Precisa revisar pro caso da nota ter duas casas decimais

const nota = 8.9
{
    if (nota >= 9.0 && nota <= 10.0)
        console.log("A")
    if (nota >= 7.0 && nota <= 8.9)
        console.log("B")
    if (nota >= 5.0 && nota <= 6.9)
        console.log("C")
    if (nota >= 4.5 && nota <= 4.9)
        console.log("D")
    if (nota >= 0 && nota <= 4.4)
        console.log("F")
    if (nota < 0 || nota >= 10.1)
        console.log("Nota Inválida")


}