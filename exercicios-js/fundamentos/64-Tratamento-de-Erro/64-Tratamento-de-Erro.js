function tratarErro(erro) {
    throw new Error('...');
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErro(e)
    }
};

const obj = { nome: 'Rodrigo' };
imprimirNome(obj)