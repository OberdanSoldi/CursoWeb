const meses = {
    1: 'Janeiro', 
    2: 'Fevereiro', 
    3: 'Março', 
    4: 'Abril', 
    5: 'Maio', 
    6: 'Junho', 
    7: 'Julho', 
    8: 'Agosto', 
    9: 'Setembro', 
    10: 'Outubro', 
    11: 'Novembro', 
    12: 'Dezembro'
};

for (let i = 1; i <= 12; i++) {
    let mes = meses[i];
    console.log(mes ? mes : 'Digite um número de 1 a 12');
};