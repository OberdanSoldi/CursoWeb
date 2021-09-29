# Tipos em JavaScript: Strings

Exemplos de comandos: 

```js
const teste = "te2te"

console.log(teste.charAt(4))
//Será retornado o valor do índicie 4 da string
```

```js
const teste = "te2te"

console.log(teste.charCodeAt(3))
//Mostra o valor do índicie na tabela unicode
```

```js
const teste = "te2te"

console.log(teste.indexOf('2'))

//Mostra o índicie do digito 
```

```js
const teste = "te2te"

console.log(teste.substring(1))
//Vai exibir depois do índicie 1

console.log(teste.substring(0, 3))
//Vai exibir começando pelo índicie 0 e terminando no índicie 3
```

```js
const teste = "te2te"

console.log("Teste".concat(teste))
//Usando o comando .concat para concatenar a String com a variável
```

```js
const teste = "te2te"

console.log(teste.replace(2, 's'))
//Usando o .replace(índicie, palavra pra substituir)
```

```js
console.log("teste1,teste2,teste3".split(','))
//Usando o comando .split para converter a string em um array
```