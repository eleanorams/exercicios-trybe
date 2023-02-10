import '../style.css';

const captBtn = document.getElementById('btnPesquisar');
const captDiv = document.getElementById('container');
const captP = document.getElementById('paragrafo');

const API_EXCHANGE = () => {
  const moeda = document.getElementById('vasco').value;
  const EXCHANGE_URL = `https://api.exchangerate.host/latest?base=${moeda}`;
  return fetch(EXCHANGE_URL).then((response) => response.json());
};

captBtn.addEventListener('click', (e) => {
  e.preventDefault();
  API_EXCHANGE().then((data) => {
    const { rates } = data;
    Object.keys(rates).forEach((rate) => {
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `${rate}`;
      captDiv.appendChild(createDiv);
      const createCurr = document.createElement('span');
      createDiv.appendChild(createCurr);
      createCurr.innerHTML = `${rates[rate]}`;
      captP.innerHTML = `Valores referentes a 1 ${data.base}`;
    });
  });
});
