// Acesse o elemento elementoOndeVoceEsta. ok
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. ok
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. ok
// Acesse o primeiroFilho a partir de pai. ok
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. ok
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. ok
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. ok
// Agora acesse o terceiroFilho a partir de pai.

// (   parentNode: retorna o nó pai
//     parentElement: retorna o elemento pai.
//     childNodes: retorna um NodeList com todos os nós filhos.
//     children: retorna um HTMLCollection com todos os elementos filhos. 
//     firstChild: retorna o primeiro nó filho.   
//     firstElementChild: retorna o primeiro elemento filho.   
//     lastChild: retorna o último nó filho.  
//     lastElementChild: retorna o último elemento filho.   
//     nextSibling: retorna o próximo nó.    
//     nextElementSibling: retorna o próximo elemento.    
//     previousSibling: retorna o nó anterior.   
//     previousElementSibling: retorna o elemento anterior.) 

const elOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elOndeVoceEsta.parentElement;
pai.style.color = 'pink';

const primeiroFilhoDoFilho = elOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Olá!';

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elOndeVoceEsta.previousElementSibling;

const atencao = elOndeVoceEsta.nextSibling;

const terceiroFilho = elOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;