console.log(Math.ceil(6.1));

const obj1 = {};

obj1.nome = 'bola'; 
obj1['nome'] = 'bola';
// As duas formas são equivalentesw


function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('exec');
    };
};

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
