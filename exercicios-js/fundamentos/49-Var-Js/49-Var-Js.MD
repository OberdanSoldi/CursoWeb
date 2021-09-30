# Var em JavaScript

`var` só tem 2 escopos possíveis global ou escopo de função.

Exemplos:

```js
{
    {
        {
            var teste = 'teste';
        }
    }
}
console.log(teste); //Retorna o valor da variável teste. var não tem escopo de bloco
```

```js
function teste() {
    var local = 123;
    console.log(local); //Retorna o valor da variável local
};
teste();
console.log(local); //Retorna um erro (local is not defined)
```