const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);

console.log(valores.length); //.length mostra a quantidade de elementos em um array

valores.push(2); //Usando .push pra adicionar elementos dentro do array
console.log(valores);

valores.pop(); //Remove o ultimo valor do array
console.log(valores);

delete valores[0]; //Tira o elemento selecionado
console.log(valores);
