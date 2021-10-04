# Destructuring em JavaScript

Destructuring é um operador de desestruturação adicionado no ES2015

Exemplos em objetos:

```js
const pessoas = {
    nome: 'ana',
    idade: 22,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
};

//const { coisas que vão ser extraidas } = objeto
const { nome, idade } = pessoas;
console.log(nome, idade); //Retorna 'ana 22'

//ou

const { nome: n, idade: i } = pessoas;
console.log(n, i)
```