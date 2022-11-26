let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = 0;


// Some todos os valores contidos no array e imprima o resultado;

for (let index = 0; index < numbers.length; index++) {
    novo += numbers[index];  
} console.log(novo);

for (let n of numbers) {
    novo += n;
} console.log(novo);