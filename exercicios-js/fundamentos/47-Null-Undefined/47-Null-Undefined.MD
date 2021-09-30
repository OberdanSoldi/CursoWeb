# Null e undefined em JavaScript

Entendendo a diferença de null e undefined.

Exemplos de `undefined`:

```js
let valor; //A variável não foi inicializada
console.log(valor) //Retorna undefined
```

```js
const produto = {} //Objeto não foi declarado
console.log(produto.preco); //Retona undefined
```

Exemplos de `null`:

```js
let valor = null; //A variável foi declarada e tem o valor null
console.log(valor); //Retorna null
```

```js
const produto = {};
produto.valor = null //Atribuindo o valor null no valor
console.log(produto) //Retorna null
```