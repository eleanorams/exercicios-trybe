// Crie um irmão para elementoOndeVoceEsta.
// 1 passo: recuperar o elemento pai
const pai = document.getElementById('pai');
// 2 passo: criar um novo elemento
const irmaoOndeVoceEsta = document.createElement('section');
// 3 passo: atribuir um id para o elemento
irmaoOndeVoceEsta.id = 'irmaoOndeVoceEsta';
// 4 passo: appendChild
pai.appendChild(irmaoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const filhoOndeVoceEsta = document.createElement('section');

filhoOndeVoceEsta.id = 'filhoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(filhoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDo1filho = document.createElement('section');
filhoDo1filho.id = 'filhoDo1Filho';
primeiroFilhoDoFilho.appendChild(filhoDo1filho);
