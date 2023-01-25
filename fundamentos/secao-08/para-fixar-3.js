// O nome das pessoas convidadas está salvo em um array chamado names;

// A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).

// Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.

// Dica: use some.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name); 
};
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

// // Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

//   //Adicione seu código aqui

const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);
  };

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
