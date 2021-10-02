# JavaScript: Hoisting

Hoisting (içar).

Exemplo usando var:

```js
console.log(`Valor de a = ${a}`); //Retorna undefined
var a = 2;
console.log(`Valor de a = ${a}`); //Retorna a = 2

/*
Hoisting:

var a;
console.log(`Valor de a = ${a}`);
a = 2;
console.log(`Valor de a = ${a}`);
*/
```

Exemplo com let:

```js
console.log(`Valor de a = ${a}`); //Retorna erro (a is not defined)
let a = 2;
console.log(`Valor de a = ${a}`); //Retorna a = 2

/*
Hoisting não funciona com let por causa do escopo
*/
```
