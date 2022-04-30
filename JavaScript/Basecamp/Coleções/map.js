/*===================================================================================================
MAP

É uma coleção de arrays no formato [chave, valor]
Pode ser iterado por um loop for... of
===================================================================================================*/
const MyMap = new Map();

//Adicionando elementos
MyMap.set('apple', 'fruit'); //Map(1) { 'apple' => 'fruit' }

//Checando o valor de um elemento
MyMap.get('apple'); //fruit

//Deletando um valor
MyMap.delete("apple");

/*===================================================================================================
DIFERENÇA ENTRE MAP E OBJETO

- Os Maps podem ter chaves de qualquer tipo
- Os Maps possuem a propriedade length
- São mais fáceis de iterar
- Utilizado quando o valor das chaves é desconhecido
- Os valores tem o mesmo tipo
===================================================================================================*/