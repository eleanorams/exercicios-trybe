// A nova tarefa do seu time de desenvolvimento é organizar o sistema de pessoas colaboradoras de uma rede de mercados. Para isso:

// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age > b.age ? 1 : - 1);

people.sort((a, b) => a.age < b.age ? 1 : - 1);

console.log(people);