function soma() {
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return console.log(soma);
}

soma();
soma(1);
soma(1.1, 2.2, 3.3);
soma('a' + 'b' + 'c');