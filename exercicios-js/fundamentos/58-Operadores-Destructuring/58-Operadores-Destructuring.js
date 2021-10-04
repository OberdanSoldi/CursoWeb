//Usando Objeto

const pessoas = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
};
// const { coisas que vão ser extraidas } = nome do objeto
const { nome, idade } = pessoas; //Usando o Destructuring
console.log(nome, idade);

// ou

const { nome: n, idade: i } = pessoas;
console.log(n, i);
