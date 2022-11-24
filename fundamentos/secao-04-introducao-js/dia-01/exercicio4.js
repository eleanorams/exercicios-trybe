// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const angulo1 = 45;
const angulo2 = 90;
const angulo3 = 45;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 + angulo2 + angulo3 > 180 || angulo1 + angulo2 + angulo3 < 180 &&  angulo1 + angulo2 + angulo3 > 0) {
    console.log(false);
} else {
    console.log("erro");
}