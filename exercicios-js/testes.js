// let isAtivo = 1;

// console.log(isAtivo);
// console.log(!isAtivo);
// // console.log(!!isAtivo); 


// const objt1 = {};

// objt1.nome = 'Um bom nome';
// objt1.valor = 800.00;
// objt1['Desconto'] = 300.00;

// console.log(objt1);

// const objt2 = {
//     nome: 'Um bom nome',
//     valor: 300,
//     desc: {
//         desc1: 2.0,
//         desc2: 3.0
//     }
// }

// console.log(objt2)

// {
//     let valor = 1;
//     console.log(valor);
//     {
//         let valor = 2;
//         console.log(valor);
//         {
//             let valor = 3;
//             console.log(valor);
//         }
//     }
// }
// console.log(valor);

function tratarerro(error){
    throw new Error('...');
}

function gritando(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!');
    }catch(error){
        tratarerro(error)
    }
}

const obj = { nome: 'Carlos' }
gritando(obj)