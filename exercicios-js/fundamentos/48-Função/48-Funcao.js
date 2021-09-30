// function soma(a, b) { //function soma(parâmetros de entrada. ex: a, b)
//     console.log(a + b);
// };

// soma(2, 3);
// soma(2); //Retorna NaN
// soma(); //Retorna NaN



// function soma2(a, b = 0) {
//     return a + b;
// };

// console.log(soma(2, 3))

//Armazenando uma função em uma variável
const soma0 = function(a, b) {
    console.log(a + b);
};

soma0(2, 3);

//Arrow function
const soma1 = (a, b) => {
    return a + b;
}

console.log(soma1(2,3));

//Retorno implícito
const sub = (a,b) => a - b;
console.log(sub(2, 3));