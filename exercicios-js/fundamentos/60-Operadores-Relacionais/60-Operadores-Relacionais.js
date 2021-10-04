console.log('01', '1' == 1); // == compara a igualdade entre duas coisas //Retorna true (comparando valor e não tipo)
console.log('02', '2' === 2); // === compara estritamente a igualdade de duas coisas //Retorna false (comparando valor e tipo)
console.log('03', '3' != 3); // != diferença //Retorna false (comparando valor e não tipo)
console.log('04', '4' !== 4) // !== estritamente diferente //Retorna true (comparando valor e tipo)

console.log('05', 3 < 2); //Menor que //Retorna false
console.log('06', 3 > 2); //Maior que //Retorna true
console.log('07', 3 <= 2); //Menor igual //Retorna false
console.log('08', 3 >= 2); //Maior igual //Retorna true

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09', d1 === d2); //compara referência de memória //Retorna false
console.log('10', d1 == d2); //compara referência de memória //Retorna false
console.log('11', d1.getTime() === d2.getTime()); //compara em milissegundos //Retorna true

console.log('12', undefined == null); //Retorna true
console.log('13', undefined === null); //Retorna false