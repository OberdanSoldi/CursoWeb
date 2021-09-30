# Usando let em loop no JavaScript

Usando let para estrutura de repetição.

Exemplos:

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
};
console.log(`i = ${i}`); //Retorna um erro por que let não existe fora do escopo for
```

```js
const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    });
};

funcs[2](); //Retorna o valor 2 o let só existe dentro do escopo for
funcs[8](); //Retorna o valor 8 o let só existe dentro do escopo for
```