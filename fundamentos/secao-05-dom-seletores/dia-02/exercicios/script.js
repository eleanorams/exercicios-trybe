// Para dar início a página, você deve criar algumas tags:

// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body; ok
// Adicione a tag main com a classe main-content como filho da tag body; ok
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; ok
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; ok
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; ok
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; ok
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5; ok
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6; ok
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. ok


const captbody = document.getElementsByTagName('body')[0];
const seth1 = document.createElement('h1');
seth1.className = 'title';
seth1.innerText = 'TrybeTrip - Agência de Viagens';
captbody.appendChild(seth1);

const mainContent = document.createElement('main');
mainContent.className = 'main-content';
mainContent.id = 'main-content'
mainContent.style.backgroundColor = 'green';
captbody.appendChild(mainContent);

const captMainContent = document.getElementById('main-content')
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
captMainContent.appendChild(centerContent);

const captCenterContent = document.getElementsByClassName('center-content')[0]
const paragrafo = document.createElement('p');
paragrafo.innerText = 'Olá, isso é um teste.'
captCenterContent.appendChild(paragrafo);

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
captMainContent.appendChild(sectionLeft);

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
captMainContent.appendChild(sectionRight);
sectionRight.style.display = 'center';


const imagem = document.createElement('img');
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
sectionLeft.appendChild(imagem);


const listaSOrdem = document.createElement('ul');
sectionRight.appendChild(listaSOrdem);
const numeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < numeros.length; index +=1 {
    const elementLi = document.createElement('li');
    elementLi.innerText = numeros[index];
    listaSOrdem.appendChild(elementLi);
    }


    for (let index = 0; index < 3; index += 1) {
        const seth3 = document.createElement('h3');
        seth3.innerText = 'Oi ' + (index + 1);
        seth3.className = 'description'
        captMainContent.appendChild(seth3);       
    }
 
    listaSOrdem.lastChild.remove()
    listaSOrdem.lastChild.remove()
    captMainContent.removeChild(sectionLeft);

