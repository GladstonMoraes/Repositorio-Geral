/* O operador de atribuição é o =, podendo ser usado tbm com os aperadores aritiméticos
 * para alterar o valor das variáveis, inclusive concatenando textos
*/
 let a = 10;
 let b = 7;

 a = a + 5;
 console.log(a);

 b = b * 3;
 console.log(b);


let w = "Texto";
w += ", mais texto";
w += "!!!";
//w -= ("!!!");
console.log(w);

// A concatenação de texto utilizando a variável só funciona com o operador aritimético "+"

//w -="!!!";
//console.log(w)