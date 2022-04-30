/*===================================================================================================
MAP
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função getAdmins que recebe um Map;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios 
   que são administradores.
===================================================================================================*/
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Rodolfo', 'ADMIN');
userRoles.set('Marcio', 'ADMIN');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Igor', 'ADMIN');
userRoles.set('Maria', 'USER');
userRoles.set('Armando', 'USER');
userRoles.set('Gerson', 'ADMIN');

console.log(getAdmins(userRoles)); //[ 'Rodolfo', 'Luiz', 'Marcio', 'Igor', 'Gerson' ]


/*===================================================================================================
SET
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
===================================================================================================*/
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}


console.log(uniqueElements(arr)); //[ 30, 40, 5, 223, 2049, 3034 ]