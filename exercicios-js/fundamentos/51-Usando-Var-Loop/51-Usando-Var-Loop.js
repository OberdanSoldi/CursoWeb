for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i = ${i}`);

// // // //

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
};

funcs[2](); //Retorna 10 escopo global da var
funcs[8](); //Retorna 10 escopo global da var