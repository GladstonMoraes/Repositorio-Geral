//Consiste em criar vários IF para mostrar conceitos diferentes conforme a nota que é declarada na variável
//Precisa revisar pro caso da nota ter duas casas decimais

const nota = 1
{
    if (nota >= 9 && nota <= 10.0)
        console.log("A")
    else if (nota >= 7 && nota < 9)
        console.log("B")
    else if (nota >= 5 && nota < 7)
        console.log("C")
    else if (nota >= 4.5 && nota < 5)
        console.log("D")
    else if (nota >= 0 && nota < 4.5)
        console.log("F")
    else 
       /* (nota < 0 || nota > 10) */                               
        console.log("Nota Inválida")
    

}

//não precesei especificar mais a expressão da linha 17 pois , 
//caso nenhuma das situações acima sejam verdadeiras, siginifica automaticamente
//que só restam notas inválidas   *********ATENÇÃO NESSA REGRA DO ELSE*********

const nota2 = 6;
let conceito = "";

if (nota2 >= 9 && nota2 <= 10.0)
    conceito = "A"
else if (nota2 >= 7 && nota2 < 9)
    conceito = "B"
else if (nota2 >= 5 && nota2 < 7)
    conceito = "C"
else if (nota2 >= 4.5 && nota2 < 5)
    conceito = "D"
else if (nota2 >= 0 && nota2 < 4.5)
    conceito = "F"
else conceito = "Nota Inválida"

console.log(conceito);