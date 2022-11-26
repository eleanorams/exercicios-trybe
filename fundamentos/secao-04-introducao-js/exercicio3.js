let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = 0;

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

for (let index = 0; index < numbers.length; index++) {
    novo += numbers[index];  
} console.log(novo / numbers.length);