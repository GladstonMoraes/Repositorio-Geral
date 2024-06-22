/* 
*
* Exercício de saudações utilizando estrutura de controle if else
*
*/

const hora = 5
    {
        if (hora <= 12)
            console.log("Bom Dia!!")
        else if (hora > 12 && hora < 18)
            console.log("Boa Tarde!!")
        else if (hora  > 18 &&  hora < 24 )
            console.log("Boa Noite!!")
            else
             console.log("Está Tarde!!")
                
    }

    /*
    * Outra forma de resolver utilizando uma variável para a saldação e um único console.log
    */


    const hora2 = 24
    let saudacao = ""
    
        if (hora2 <= 12) {
            saudacao = ("Bom Dia!!")
         } else if (hora2 > 12 && hora2 < 18){
            saudacao = ("Boa Tarde!!")
         } else if (hora2  > 18 &&  hora2 < 24 ){
            saudacao = ("Boa Noite!!")
         } else{ saudacao = ("Está Tarde!!")}
            
    

    console.log(saudacao)

    //Muita atenção quando o caso envolver ordem de execução, para obedecer esta ordem no código
    // não inverter a ordem dia, tarde e noite para ex: tarde, noite e dia