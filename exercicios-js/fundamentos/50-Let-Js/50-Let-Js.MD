# Let em JavaScript

Let diferente do var tem escopo por blocos.

Exemplos:

```js
var valor = 1;
{
    let valor = 1;
    console.log(valor); //Retorna o valor de let por causa do escopo
}
console.log(valor); //Retorna o valor de var por causa do escopo
```

```js
{
    let valor = 1;
    console.log(valor); //Retorna 1
    {
        let valor = 2;
        console.log(valor); //Retorna 2
        {
            let valor = 3;
            console.log(valor); //Retorna 3
        }
    }
}
console.log(valor); //Retorna erro (valor is not defined)
```