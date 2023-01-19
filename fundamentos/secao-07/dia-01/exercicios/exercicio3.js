const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. Ok

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. Ok

//Crie uma função para mostrar o tamanho de um objeto. Ok

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. Ok

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ok

const adicionaTurno = (obj, key, value) => {
  obj[key] = value;
};

adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

const listaChaves = (obj) => {
  console.log(Object.values(obj));
};

listaChaves(lesson3);

const tamanhoObj = (obj) => {
  console.log(Object.keys(obj).length);
};

tamanhoObj(lesson2);

const valoresObj = (obj) => {
  console.log(Object.values(obj));
};

valoresObj(lesson2);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas. Ok
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

const somaEstudantes = (obj) => {
  let soma = 0;
  for (let index = 0; index < Object.values(obj).length; index += 1) {
    soma += Object.values(obj)[index].numeroEstudantes;
  }
  return soma;
};

console.log(somaEstudantes(allLessons));

const valorPorNumero = (obj, num) => {
  return Object.values(obj)[num];
};
console.log(valorPorNumero(lesson1, 2));

const verificaPar = (obj, key, value) => {
  return obj[key] === value;
};

console.log(verificaPar(lesson2, 'professor', 'Carlos'));
