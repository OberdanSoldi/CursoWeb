for (let i = 0; i < 10; i++) {
    console.log(i);
};
//console.log(`i = ${i}`); //Retorna erro a variável let só existe dentro do laço

// // // //

const funcs = [];

for (let i = 0; i< 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
};

funcs[2]();
funcs[8]();