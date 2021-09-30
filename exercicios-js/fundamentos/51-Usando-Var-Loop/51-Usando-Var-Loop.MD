# Usando var em loop com JavaScript

Usando var para estrutura de repetição.

Exemplos:

```js
for (var i = 0; i < 10; i++) {
    console.log(i); //Conta de 1 até 9
};
console.log(i); //Retorna o valor de i (10)
```

```js
const funcs = [];

for (var i = 0; i < 10) {
    funcs.push(function() {
        console.log(i);
    });
};

funcs[2](); //Retorna 10 por problema de escopo da var
funcs[8](); //Retorna 10 por problema de escopo da var
```