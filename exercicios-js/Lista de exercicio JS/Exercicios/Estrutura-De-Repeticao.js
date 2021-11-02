const users = [
    {nome: 'carlos', tecnologias: ['HTML', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JAVASCRIPT', 'CSS']},
    {nome: 'Tuane', tecnologias: ['HTML', 'NODE.JS']}
];

for(let i = 0; i < 3; i++) {
    console.log(`${users[i].nome}, trabalha com ${users[i].tecnologias.join(', ')}`);
}