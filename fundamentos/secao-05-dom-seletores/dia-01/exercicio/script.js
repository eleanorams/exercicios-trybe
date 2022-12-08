function twoYears() {
  const paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerText = "Formada e empregada! :)";
}
twoYears();

function changeBackground() {
  const fundo = document.getElementsByClassName("main-content")[0];
  fundo.style.backgroundColor = "rgb(76,164,109)";
}
changeBackground();

function changeCenter() {
  const fundoCentro = document.getElementsByClassName("center-content")[0];
  fundoCentro.style.backgroundColor = "white";
}
changeCenter();

function corrigeTexto() {
  const corrige = document.getElementsByTagName("h1")[0];
  corrige.innerText = "Desafio JavaScript";
}
corrigeTexto();

function paraMinusculo() {
  const minusculo = document.getElementsByTagName("p")[0];
  minusculo.innerText = minusculo.innerHTML.toUpperCase();
}
paraMinusculo();
