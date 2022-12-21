const decemberDaysList = [
  27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

//   O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Escreva seu código abaixo.

const createDaysList = () => {
  const ulDays = document.getElementById("days");
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const liDays = document.createElement("li");
    liDays.className = "day";
    liDays.innerHTML = decemberDaysList[index];
    ulDays.appendChild(liDays);
    if (
      decemberDaysList[index] === 24 ||
      decemberDaysList[index] === 25 ||
      decemberDaysList[index] === 31
    ) {
      liDays.classList.add("holiday");
    }
  }
  friday();
};

const friday = () => {
  const getFriday = document.getElementsByClassName("day");
  for (let index = 5; index < getFriday.length; index += 7) {
    getFriday[index].classList.add("friday");
  }
};

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

const corFeriados = () => {
  const captHoliday = document.getElementsByClassName("holiday");
  for (let index = 0; index < captHoliday.length; index += 1) {
    if (captHoliday[index].style.backgroundColor === "pink") {
      captHoliday[index].style.backgroundColor = "unset";
    } else {
      captHoliday[index].style.backgroundColor = "pink";
    }
  }
};

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
const corSexta = () => {
  const captFriday = document.getElementsByClassName("friday");
  const arrayDeSextas = ["2", "9", "16", "23", "30"];

  for (let index = 0; index < captFriday.length; index += 1) {
    if (captFriday[index].innerText === "Sexta!!!") {
      captFriday[index].innerText = arrayDeSextas[index];
    } else {
      captFriday[index].innerText = "Sexta!!!";
    }
  }
};

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

//Criando Botão geral
function createButton(Feriados, id, funçao) {
  const btnContainer = document.getElementsByClassName("buttons-container")[0];
  const botao = document.createElement("button");
  botao.id = id;
  btnContainer.appendChild(botao);
  botao.innerHTML = Feriados;
  botao.addEventListener("click", funçao);
};

window.onload = () => {
  createDaysList();
  createButton("Feriados", "btn-holiday", corFeriados);
  createButton("Sexta-feira", "btn-friday", corSexta);
  changeHolidayColor();
};
