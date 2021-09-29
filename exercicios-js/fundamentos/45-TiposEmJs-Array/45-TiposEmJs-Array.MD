# Tipos em JavaScript: Arrays

Exemplos:

```js
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores); //Mostra o array
```

Adicionando valores no array.

Exemplos: 

```js
const valores = [7.7, 8.9, 6.3, 9.2];
valores[4] = 10;
console.log(valores); //Retora: 7.7, 8.9, 6.3, 9.2, 10
```

Ou

```js
const valores = [7.7, 8.9, 6.3, 9.2];
valores.push(2); //Retorna: 7.7, 8.9, 6.3, 9.2, 2
```

Removendo valores do Array:

Exemplos: 

```js
const valores = [7.7, 8.9, 6.3, 9.2, 10];
valores.pop(); //Remove o ultimo valor do array
```

Ou

```js
const valores = [7.7, 8.9, 6.3, 9.2, 10];
delete valores[0]; //Remove o elemento selecionado
console.log(valores);
```