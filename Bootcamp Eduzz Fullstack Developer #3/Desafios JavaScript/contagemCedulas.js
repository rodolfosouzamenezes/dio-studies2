/*======================================================================================
                                Desafio Contagem de Cédulas                                
========================================================================================
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas 
possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar 
são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas 
necessárias.

//Entrada
//Você receberá um valor inteiro N (0 < N < 1000000).

//Saída
//Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo 
//o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

//Exemplos de entrada: 
//576

//Exemplos de saída: 
//576
//5 nota(s) de R$ 100,00
//1 nota(s) de R$ 50,00
//1 nota(s) de R$ 20,00
//0 nota(s) de R$ 10,00
//1 nota(s) de R$ 5,00
//0 nota(s) de R$ 2,00
//1 nota(s) de R$ 1,00

//Exemplos de entrada: 
//11257

//Exemplos de saída: 
//11257
//112 nota(s) de R$ 100,00
//1 nota(s) de R$ 50,00
//0 nota(s) de R$ 20,00
//0 nota(s) de R$ 10,00
//1 nota(s) de R$ 5,00
//1 nota(s) de R$ 2,00
//0 nota(s) de R$ 1,00

//Exemplos de entrada: 
//503

//Exemplos de saída: 
//503
//5 nota(s) de R$ 100,00
//1 nota(s) de R$ 50,00
//0 nota(s) de R$ 20,00
//0 nota(s) de R$ 10,00
//0 nota(s) de R$ 5,00
//1 nota(s) de R$ 2,00
//1 nota(s) de R$ 1,00

*/

let n = 11257;
let quantidadeNotas = 0;
let cedulas = [100,50,20,10,5,2,1];

// Função responsável por contar as notas a partir de um valor.
function contaNotas(valor){
  quantidadeNotas = parseInt(n/valor);

  // TODO Subtraia de "n" a "quantidadeNotas" multiplicada por seu respectivo "valor" (parâmetro).
  n -= quantidadeNotas*valor;

  console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
}

console.log(n);

for(let cedula in cedulas){
    contaNotas(cedulas[cedula]);
}