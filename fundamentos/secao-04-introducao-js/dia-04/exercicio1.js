let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

function mensagem(info) {
    return 'boas-vindas, ' + info.personagem
} 
console.log(mensagem(info));

// // // Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor

info['recorrente'] = 'Sim';

// // Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let index in info) {
    console.log(info[index]);
}


// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
personagem: 'Tio Patinhas',
origem: 'Christmas on Bear Montain, Dells Four Color Comics #178',
nota: 'O último MacPatinhas',
recorrente: 'Sim'
};

for (let index in info2) {
    console.log(info2[index]);
}