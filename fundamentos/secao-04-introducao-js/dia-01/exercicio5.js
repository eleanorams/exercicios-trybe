// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// // Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Cavalo";

switch (peca.toLowerCase()) {
    case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
    break;

    case "peão":
    console.log("Move-se somente para frente, uma casa por vez. Exceto na primeira vez que é movido, quando pode mover-se 2 casas. É a única peça que não pode mover-se para trás.");
    break;

    case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser."); 
    break;

    case "bispo":
    console.log("Move-se em diagonal, quantas casas desejar, desde que estejam livres.");
    break;

    case "cavalo":
        console.log("Move-se em forma de um “L”, podendo pular peças (sem capturá-las).Captura quando termina seu movimento na casa de uma peça adversária.");
    break;
    
    case "rainha":
    console.log("Pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.Não pode pular outras peças. A rainha captura no mesmo caminho em que se move, ocupando a casa da peça adversária.");
break;

default:
    console.log("erro");
}