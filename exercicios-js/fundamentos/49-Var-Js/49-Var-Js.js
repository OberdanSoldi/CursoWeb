// {
//     {
//         {
//             {
//                 var sera = 'sera?'; //var tem escopo global nessa situação
//             }
//         }
//     }
// }
// console.log(sera)

function teste() {
    var local = 123;
};

teste();
console.log(local);

//var só tem 2 escopos possiveis, global ou no escopo de função //Não existe escopo de bloco para var

var numero = 1;
{
    var numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);