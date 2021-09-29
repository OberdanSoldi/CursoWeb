# Tipos em JavaScript: Number

Usando o comando `Number` em alguma variável em JavaScript ele retorna se os números são inteiros ou não.

Exemplos: 

```js
const peso1 = 1.0 //Mesmo o valor da variável sendo float é considerado pelo JavaScript como inteiro pq o número depois do ponto é 0
const peso2 = Number('1.0') //No console.log(peso2) vai retornar true
const peso3 = 1.1 //Valor considerado float

console.log(Number.isInteger(peso1)) //O comando Number.isInteger() retorna true ou false dependendo o tipo da variável sendo true para inteiro ou false para float
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))
```

```js
const valor1 = 9.856985
const valor2 = 7.145264

console.log(valor1.toFixed(2)) //O comando .toFixed(número) define quantas casas vão ser exibidas depois do ponto sem mudar o valor da variável
console.log(valor2.toSting()) //O comando .toString() passa o tipo da variável para string (se adicionado o valor 2 dentro dos parênteses converte o conteúdo para binário)
```

Alguns coidados com o comando Number:

```js
 console.log(7 / 0) //Dividindo um número por zero o resultado retornado vai ser: Infinity
```

```js
console.log("10" / 2) //Dividndo um número por uma String o resultado retornado vai ser: 5.
//O javaScript vai analisar a string e converter para number para fazer a divisão
```