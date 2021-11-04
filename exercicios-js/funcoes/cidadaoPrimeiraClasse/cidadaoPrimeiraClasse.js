//Função em JS é First-Class Object (citizens)
//Higher-order function

//Criar de formal literal:

function fun1() {

}

//Armazenar em uma variável

const fun2 = function () {

}
//teste
//Armazenar em um array

const array = [function (a, b) {return a + b}, fun1, fun2];

//Armazenar em um atributo de objeto

const obj = {};
obj.falar = function () {return 'Opa'};
console.log(obj.falar());

//Passar função como parâmetro

function run(fun) {
    fun();
}
run(function () {console.log('Executando...')})

function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);