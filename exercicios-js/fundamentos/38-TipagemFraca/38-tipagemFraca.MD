# Tipagem Fraca

JavaScript é uma linguagem de tipagem dinâmica.

Usando o comando `typeof` para exibir o tipo da variável, existem varios tipos de variáveis como: *string*, *number*, *boolean* entre outros.

Exemplos:

```js
let qualquer = 'legal' //Não foi declarado o tipo da variável
console.log(qualquer) 
console.log(typeof qualquer) //retorna o tipo da variável como (string)
```

```js
let qualquer = 3.15 //Novamente não foi declarado o tipo da variável
console.log(qualquer) 
console.log(typeof qualquer) //retorna o tipo da variável como (number)
```

```js
//Evitar nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false //Produto Químico Perigoso... kkk
```