# Operadores relacionais em JavaScript

Operadores relacionais em JavaScript.

Exemplo com comparação:

Igualdade:

```js
console.log('01', '1' == 1); //Compara igualdade //Retorna true (comparando valor e não tipo)
```

Estritamente igual:

```js
console.log('02', '2' === 2), //Compara estritamente a igualdade //Retorna false (comparando valor e tipo)
```

Exemplo com diferença:

Diferente:

```js
console.log('03', '3' != 3); //Diferença //Retorna false (comparando valor e não tipo)
```

Estritamente diferente:

```js
console.log('04', '4' !== 4); //Estritamente diferente //Retorna true (comparando valor e tipo)
```

Exemplos com maior que / maior igual:

Maior que:

```js
console.log('05', 3 > 2); //Retorna true
```

Maior igual:

```js
console.log('08', 3 >= 2); //Retorna false
```

Exemplos com menor que / menor igual:

Menor que:

```js
console.log('05', 3 < 2); //Retorna false
```

Menor igual: 

```js
console.log('07', 3 <= 2) //Retorna false
```

Exemplos de comparação:

```js
const d1 = new Date(0);
const d2 = new Date(0);

console.log('09', d1 == d2); //Compara referência de memória //Retorna false
console.log('10', d1 === d2) //Compara referência de memória //Retorna false
console.log('11', d1.getTime() === d2.getTime()); //Compara em milissegundos //Retorna true

console.log('12', undefined == null); //Retorna true
console.log('13', undefined === null); //Retornal false
```