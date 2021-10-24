const calcularSalario = (hrsTrabalhadas, recebePorHr) => {
    total = hrsTrabalhadas * recebePorHr;
    console.log(`Salário igual a R$ ${total}`);
};

calcularSalario(150, 40.5);