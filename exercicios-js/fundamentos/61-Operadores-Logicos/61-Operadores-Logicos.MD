# Operadores lógicos em JavaScript

Operadores lógicos em JavaScript

Exemplos:

```js
function compras(trab1, trab2) {
    const comprarSorv = trab1 || trab2; // Operação do tipo OU
    const comprarTv50 = trab2 && trab2; // Operação do tipo E
    const comprarTv32 = trab1 != trab2; // Operação do tipo OU exclusivo
    const manterSaudavel = !comprarSorv; // Operação de negação lógica
    return { comprarSorv, comprarTv50, comprarTv32, manterSaudavel }
};

console.log(comprar(true, true)); //Retorna { comprarSorv: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(comprar(true, false)); //Retorna { comprarSorv: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(comprar(false, true)); //Retorna { comprarSorv: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(comprar(false, false)); //Retorna { comprarSorv: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true }

/*
v e v -> V
v e f -> F
f e ? -> F
*/

/*
v ou ? -> V
f ou ? -> ?
*/

/*
!v -> F
!f -> V
*/
```