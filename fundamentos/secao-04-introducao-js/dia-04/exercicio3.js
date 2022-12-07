// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function palindromo(a) {
    let split = a.split("");
    let reverse = split.reverse();
    let join = reverse.join("")
    return join;
}

console.log(palindromo('anel'));