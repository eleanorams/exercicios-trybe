// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let teste = [2, 3, 6, 7, 10, 1];
// let compare = teste[0];
// let maiorIndex;
// // // for (let index = 0; index < teste.length; index += 1) {
// //      if (compare < teste[index]) {
// //         compare = teste[index]
// //         maiorIndex = index;
//      }
// }  console.log(maiorIndex);

function mIndex(array) {
    let compare = array[0];
    let maiorIndex;
    for (let index = 0; index < array.length; index += 1) {
        if (compare < array[index]) {
           compare = array[index]
           maiorIndex = index;
}      
    } return maiorIndex;
};

console.log(mIndex(teste)); 