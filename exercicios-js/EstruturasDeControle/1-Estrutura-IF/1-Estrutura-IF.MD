# Estrutura IF no JavaScript

Estrutura IF no JavaScript

Exemplos:

```js
function notaBoa(nota) {
    if(nota > 7) {
        console.log(nota);
    };
};

console.log(8) //Retorna o valor 8
console.log(6) //Não retorna nada
```

```js
function verdade(valor) {
    if(valor) {
        console.log(valor);
    };
};

console.log(verdade(0)) //Não retorna nada
console.log(verdade(1)) //Retorna o valor 1
```

```js
function teste1(num) {
    if(num > 7) {
        console.log(num);
        console.log('Final');
    };
};

console.log(teste1(6));
console.log(teste1(8));
```