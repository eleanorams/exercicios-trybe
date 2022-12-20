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

function createButton(Feriados) {
  const btnContainer = document.getElementsByClassName("buttons-container")[0];
  const botao = document.createElement("button");
  botao.id = "btn-holiday";
  btnContainer.appendChild(botao);
  botao.innerHTML = Feriados;
}

// const changeHolidayColor = () => {
//   const holidayButton = document.querySelectorAll(".holiday");
//   const altColor = holidayButton[index].getElementsByClassName.backgroundColor;
//   for (let index = 0; index < holidayButton.length; index += 1) {
//     if (altColor === "#eee") {
//       holidayButton[index].getElementsByClassName.backgroundColor = "yellow";
//     } else {
//       altColor = "#eee";
//     }
//   }
// };

window.onload = () => {
  createDaysList();
  createButton("Feriados");
  changeHolidayColor();
};
