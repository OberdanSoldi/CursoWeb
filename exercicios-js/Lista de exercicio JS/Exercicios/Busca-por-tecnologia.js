const users = [
    {nome: 'carlos', tecnologias: ['HTML', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JAVASCRIPT', 'CSS']},
    {nome: 'Tuane', tecnologias: ['HTML', 'NODE.JS']}
];

for(let i = 0; i < users.length; i++){
    if(users[i].tecnologias.includes('CSS')) {
        console.log(`O usuário ${users[i].nome}, usa css`);
    }else{
        console.log(`O usuário ${users[i].nome}, não usa css`);
    }
}