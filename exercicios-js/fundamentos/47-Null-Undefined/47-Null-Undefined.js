// const a = {name: 'teste'};
// const b = a;

// let c = 3;
// let d = c;
// d++;
// console.log(`Valor de C: ${c}`);
// console.log(`Valor de D: ${d}`);

let valor; //Não foi inicializada (undefined)
console.log(valor);

//console.log(valor2); //A variável (valor2) não foi declarada (is not defined)

valor = null; //Ausência de valor
console.log(valor);
//console.log(valor.toString()); //Retorna um erro (Cannot read property 'toString' of null)

const produto = {};
console.log(produto.preco); //Retorna undefined
console.log(produto); //Retorna {}

produto.preco = 4.0;
console.log(produto); //Retorna { preco: 4 }

produto.preco = undefined; //Evitar atribuir undefined
console.log(!!produto.preco); //Retorna boolean (false)
console.log(produto); //Retorna { preco: undefined }

produto.preco = null; //Sem preço
console.log(!!produto.preco); //Retorna boolean (false)
console.log(produto); //Retorna preço (null)