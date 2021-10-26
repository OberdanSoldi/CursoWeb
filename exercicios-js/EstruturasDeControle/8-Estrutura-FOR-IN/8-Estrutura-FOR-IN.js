const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notas) {
    console.log(`${i}, ${notas[i]}`);
}

//-------------------------------------------------------------------

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
};

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

//-------------------------------------------------------------------

const valorProduto = {
    pao: 1,
    arroz: 15,
    feijao: 12,
    batata: 3
}

for(let produtos in valorProduto) {
    console.log(`${produtos}, ${valorProduto[produtos]}R$`);
}

//-------------------------------------------------------------------
