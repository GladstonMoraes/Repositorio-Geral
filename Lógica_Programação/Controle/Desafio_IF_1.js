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

//não precesei especificar mais a expressão pois, 
//caso nenhuma das situações acima sejam verdadeiras, siginifica automaticamente
//que só restam notas inválidas   *********ATENÇÃO NESSA REGRA DO ELSE*********