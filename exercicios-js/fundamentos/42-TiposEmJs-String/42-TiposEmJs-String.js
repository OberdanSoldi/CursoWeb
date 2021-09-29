const escola = "te2te"

console.log(escola.charAt(4)) //Mostra a letra do índicie 4 da string

console.log(escola.charCodeAt(3)) //Mostra o valor dela na tabela unicode

console.log(escola.indexOf('2')) //Mostra o índicie do dígito na palavra

console.log(escola.substring(1)) //Exibe depois do índicie 1

console.log(escola.substring(0, 3)) //Exibe começando pelo índicie 0 e terminando no 3 sem incluir ele

console.log("escola".concat(escola).concat("!")) //Usando o comando .concat para concatenar uma string com uma variável

console.log(escola.replace(2, 's')) //Usando o comando .replace(índicie, 'Letra pra substituir') para trocar as letras 

console.log('teste1,teste2,teste3'.split(',')) //Usando o comando .split(',') converte uma string em um array

