// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const numero1 = 1;
const numero2 = 2;
const numero3 = 3;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}
