# Tipos em JavaScript: Object

Object

Exemplos:


Primeira maneira de criar um objeto:
```js
const objt1 = {};

objt1.nome = 'Um bom nome';
objt1.valor = 800.00;
objt1['Desconto'] = 300.00;

console.log(objt1); //{ nome: 'Um bom nome', valor: 800, Desconto: 300 }
```

Segunda maneira de criar um objeto:
```js
const objt2 = {
    nome: 'Um bom nome',
    valor: 300,
    desc: {
        desc1: 2.0,
        desc2: 3.0
    }
}

console.log(objt2); //{ nome: 'Um bom nome', valor: 300, desc: { desc1: 2, desc2: 3 } }
```