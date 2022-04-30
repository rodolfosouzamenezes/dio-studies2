/*================================================================================
                                Desafio Soma Simples                                
==================================================================================
Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma 
entre elas e chame essa variável de SOMA.
A seguir escreva o valor desta variável.

//Entrada
//O arquivo de entrada contém 2 valores inteiros.

//Saída
//Imprima a variável SOMA com todas as letras maiúsculas, inserindo um espaço em 
//branco antes e depois do símbolo de igualdade, seguido pelo valor correspondente 
//à soma de A e B.


//Exemplos de entrada: 30, 10
//Exemplos de saída: SOMA = 40
*/

// a função gets é implementada dentro do sistema para ler as entradas dos dados
// afunção print para imprimir a saída (output) de dados e já pula uma linha ("\n")

let A = parseInt(gets()); //Recebendo os valores
let B = parseInt(gets()); 

let SOMA = A + B; //Soma A e B           
print("SOMA = "+ SOMA ); //40

