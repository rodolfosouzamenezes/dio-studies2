/*================================================================================
                                 Seis Números Ímpares                                
==================================================================================
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a 
partir de X, um valor por linha, inclusive o X se for o caso.

//Entrada
//A entrada será um valor inteiro positivo.

//Saída
//A saída será uma sequência de seis números ímpares.

//Exemplos de entrada: 8
//Exemplos de saída: 9, 11, 13, 15, 17, 19
*/
let num = 8;

let init = num % 2 === 0 ? num + 1 : num;

for (let i = 0; i < 6; i++) {
    console.log(init);//9 11 13 15 17 19
    
    init+=2
}