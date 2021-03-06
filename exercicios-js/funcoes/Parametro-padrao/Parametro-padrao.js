//Estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    // return console.log(a + b + c);
}

soma1();
soma1(3);
soma1(1, 2, 3);
soma1(0,0,0);

//Estrategia 2 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    // return console.log(a + b + c);
}

soma2();
soma2(5);
soma2(1, 2, 3);
soma2(0,0,0)

//Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return console.log(a + b + c);
}

soma3();
soma3(5);
soma3(1, 2, 3);
soma3(0,0,0)