const users = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

const sub = (a, b) => Math.round(a - b);

const somaReceitasDespesas = () => {
for(let a = 0; a < users.length; a++) {
    let rec = users[a].receitas;
    let somaReceita = 0;
    for (let i = 0; i < rec.length; i++){
        somaReceita += rec[i];
    }
    let des = users[a].despesas;
    let somaDespesa = 0;
    for (let b = 0; b < des.length; b++){
        somaDespesa += des[b];
    }
    if(sub(somaReceita, somaDespesa) >= 0) {
        console.log(`O usuário ${users[a].nome} está com saldo POSITIVO de ${sub(somaReceita, somaDespesa)}`);
    } else {
        console.log(`O usuário ${users[a].nome} está com saldo NEGATIVO de ${sub(somaReceita, somaDespesa)}`);
    }
    }
}

somaReceitasDespesas();