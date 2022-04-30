/*======================================================================================
                                    Desafio Notas da Prova                                
========================================================================================
Norminia é uma professora e pesquisadora renomada de uma famosa Universidade do 
Brasil, com inúmeras prêmiações e reconhecimento internacional pelo seu trabalho. 
Recentemente, Norminia foi convidada para ministrar aulas em uma Universidade da 
Alemanhã. Mesmo falando muito bem a Língua alemã, Norminia ficou um pouco apreensiva
com a responsabilidade, mas resolveu aceitar a proposta e encará-la como um bom desafio.

Os estudantes adoraram a metodologia de ensino de Norminia e tudo estava indo super bem, 
até o momento da aplicação da sua primeira prova. Acostumada a dar notas de 0 (zero) a 
100 (cem), ela fez o mesmo na primeira prova da sua turma da Alemanhã. No entanto, os 
estudante acharam estranho, uma vez que na Alemanhã o sistema de notas é diferente: as 
notas devem ser dadas como conceitos de A a E. O conceito A é o mais alto, enquanto o 
conceito E é o mais baixo.

Conversando com outros docentes, ela recebeu a sugestão de utilizar a seguinte tabela, 
relacionando as notas numéricas com as notas de conceitos:

CONCEITO
E = 0
D = 1 a 35
C = 36 a 60
B = 61 a 85
A = 86 a 100

O problema é que Norminia já deu as notas no sistema numérico, e terá que converter as 
notas para o sistema de letras. No entanto, Norminia precisa preparar as próximas 
atividades educacionais para os seus alunos, e não tem tempo suficiente para fazer a 
conversão das notas manualmente.

Você terá o seguinte desafio: escrever um programa que recebe uma nota no sistema numérico 
e determina o conceito correspondente.


//Entrada
//A entrada contém um único conjunto de testes, que deve ser lido do dispositivo de entrada 
//padrão (normalmente o teclado). A entrada contém uma única linha com um número inteiro N 
//(0 ≤ N ≤ 100), representando uma nota de prova no sistema numérico.

//Saída
//Seu programa deve imprimir, na saída padrão, uma letra (A, B, C, D, ou E em maiúsculas) 
//representando o conceito correspondente à nota dada na entrada.

//Exemplos de entrada: 12
//Exemplos de saída: D

//Exemplos de entrada: 87
//Exemplos de saída: A
*/

let nota = 12; //Neste exemplo a resposta vai ser D


if( nota === 0 ) {
    console.log("E");
} else if ( nota <= 35 && nota >= 1 ) {
    console.log("D"); 
} else if ( nota <= 60 && nota >= 36 ) {
    console.log("C");
} else if ( nota <= 85 && nota >= 61 ) {
    console.log("B");
}else if ( nota <= 100 && nota >= 86 ) {
    console.log("A");
}