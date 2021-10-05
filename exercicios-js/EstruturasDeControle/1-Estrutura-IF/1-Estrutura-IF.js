function boaNoticia(nota) {
    if(nota > 7) {
        console.log(`Aprovado com ${nota}`);
    };
};

boaNoticia(8.1);
boaNoticia(6.1);

function verdade(valor) {
    if(valor) {
        console.log(`sim ${valor} é verdadeiro`);
    };
};

verdade();
verdade(null);
verdade(NaN);
verdade('')
verdade(-1);