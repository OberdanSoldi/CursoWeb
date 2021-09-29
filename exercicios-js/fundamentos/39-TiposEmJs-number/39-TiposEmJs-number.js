const peso1 = 1.0 //Mesmo sendo float é considerado número inteiro por ser 1.0 
const peso3 = 1.1 //Um exemplo diferente por ser 1.1 é considerado float
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Utilizando o comando Number.IsInteger ele mostra se o número é inteiro ou float de uma variável

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const avaliacao1 = 9.871 
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Utilizando o comando (nomeVariável).toFixed(Quantidade de casas depois do ponto) é possível limitar a quantidade de números depois do ponto
console.log(media.toString()) // Utilizando o comando (nomeVariável).toString() é possível converter o valor da variável para String //Adicionando o 2 dentro de .toString(2) é possível converter para binário


console.log(7/0)