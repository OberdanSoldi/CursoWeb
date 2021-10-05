function compras(trab1, trab2) {
    const comprarSorv = trab1 || trab2; // || (operação tipo OU)
    const comprarTv50 = trab1 && trab2; // && (operação tipo i)
    const comprarTv32 = trab1 != trab2; // (operação OU exclusivo)
    const manterSaudavel = !comprarSorv; // (negação lógica)
    return { comprarSorv, comprarTv50, comprarTv32, manterSaudavel };
};


console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));