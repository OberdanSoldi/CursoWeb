# Tratamento de erro com JavaScript

Tratamento de erro com JavaScript

Exemplos: 

```js
function tratarErro(erro) {
    throw new Error('...');
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErro(e)
    }
};

const obj = { nome: 'Rodrigo' };
imprimirNome(obj)
```