let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //Usando !! para manter o valor de true ou false e ! para inverter o valor para true ou false
//Todos os números com exceção do 0 são verdadeiros

let nome = '';

console.log(nome || 'Desconhecido'); //Usando o operador lógico em javascript || (OU)