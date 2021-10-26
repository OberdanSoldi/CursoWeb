# Estrutura FOR IN em JavaScript

Estrutura FOR IN em JavaScript

Exemplos: 

```javascript
const notas = {
    nota1: 7.1,
    nota2: 5.6,
    nota3: 7.8,
    nota4: 9.1
};

for(nota in notas) {
    console.log(`${nota}, ${notas[nota]}`);
}
```