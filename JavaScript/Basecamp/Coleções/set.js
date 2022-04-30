/*===================================================================================================
SET

São estruturas que armazenam apenas valores únicos
===================================================================================================*/
const mySet = new Set();

//Adicionar valor
mySet.add(1);
mySet.add(5);

//Procurar valor
mySet.has(1); //true
mySet.has(3); //false

//Deletar valor
mySet.delete(5);

/*===================================================================================================
DIFERENÇA ENTRE SET E ARRAY

- Sets possuem valores únicos
- Consulta-se o número de resgistros pela propriedade size, ao invés do length
- Não possui os métodos map, filter, reduce etc.
===================================================================================================*/