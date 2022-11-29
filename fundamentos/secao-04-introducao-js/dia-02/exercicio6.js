let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 > 0) {
    impar.push(numbers[index])
  }  
}
if (impar.length !== 0) {
  console.log(impar.length)
} else {
  console.log("nenhum valor ímpar encontrado");
}