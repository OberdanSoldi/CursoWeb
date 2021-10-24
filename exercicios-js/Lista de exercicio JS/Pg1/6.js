const verificaTipo = (entrada) => {
    tipo = typeof entrada;
    if(tipo === 'boolean') {
        console.log(!entrada);
    }else if(tipo === 'number') {
        console.log(entrada * -1);
    }else{
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`);
    }
};
verificaTipo(true);
verificaTipo(1);
verificaTipo('a');