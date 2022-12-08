function twoYears() {
let paragrafo = document.getElementsByTagName('p')[1];
paragrafo.innerHTML = 'Formada e empregada! :)'
};
twoYears();

function changeBackground() {
let fundo = document.getElementsByClassName('main-content')[0];
fundo.style.background = 'rgb(76,164,109)'
};
changeBackground();

function changeCenter() {
let fundoCentro = document.getElementsByClassName('center-content')[0];
fundoCentro.style.background = 'white'
};
changeCenter();

function corrigeTexto() {
let corrige = document.getElementsByTagName('h1')[0];
corrige.innerHTML = 'Desafio JavaScript'
};
corrigeTexto ();

function paraMinusculo() {
    let minusculo = document.getElementsByTagName('p')[0];
    minusculo.innerHTML = minusculo.innerHTML.toUpperCase();
    };
    paraMinusculo();