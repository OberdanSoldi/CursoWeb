const maiorIgual = (primeiroNum, segundoNum) => {
    if(primeiroNum > segundoNum){
        console.log(`O número ${primeiroNum} é maior que o número ${segundoNum}`);
    }else if(primeiroNum == segundoNum){
        console.log(`O número ${primeiroNum} e o número ${segundoNum} são iguais`);
    }else if(primeiroNum < segundoNum) {
        console.log(`O número ${primeiroNum} é menor que o número ${segundoNum}`);
    }else if(primeiroNum != segundoNum) {
        console.log(`O número ${primeiroNum} e o número ${segundoNum} são diferentes`);
    }
};

maiorIgual(0, 0);
maiorIgual(1, 2);
maiorIgual(0, 3);