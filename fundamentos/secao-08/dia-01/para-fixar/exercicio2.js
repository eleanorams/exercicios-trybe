// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const loteria = (escolhido) => {
const sorteado = Math.ceil(Math.random() * 5);
if (escolhido === sorteado) {
    return 'Parabéns, você ganhou'
} return 'Tente novamente'
}
console.log(loteria(2))

const lotery = (sorteado, escolhido) => (sorteado === escolhido ? 'Parabéns, você ganhou' : 'Tente novamente');

const loteria1 = (lotery1) => {
const sorteado = Math.ceil(Math.random() * 5);
return lotery(lotery1, sorteado);
}

console.log(loteria1(2));