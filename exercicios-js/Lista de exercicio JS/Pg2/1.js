const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (numero > minimo && numero < maximo) {
        console.log(`O número está entre o mínimo e o máximo e a opção de inclusivo foi ${inclusivo}.`);
    } else if (inclusivo === true && (numero >= minimo && numero <= maximo)) {
        console.log(`O número está entre o mínimo e o máximo e a opção de inclusivo foi ${inclusivo}.`);
    } else {
        console.log(`O número não está entre o mínimo e o máximo.`);
    }
}
console.log('----------------------------------------');
estaEntre(4, 3, 6, true);
estaEntre(4, 3, 6, false);
console.log('----------------------------------------');
estaEntre(7, 4, 7, false);
estaEntre(4, 4, 5, true);
console.log('----------------------------------------');
estaEntre(4, 5, 8, true);
estaEntre(4, 5, 8, false);
console.log('----------------------------------------');


// const verdade = (verdade1 = false) => {
//     if(verdade1) {
//         console.log(`teste ${verdade1}`);
//     }else{
//         console.log(`teste ${verdade1}`);
//     }
// };
//
// verdade(true);
// verdade();

