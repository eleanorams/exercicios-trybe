import '../style.css';
import Swal from 'sweetalert2';

// eslint-disable-next-line no-magic-numbers
const heroId = () => Math.ceil((Math.random() * 730));

const captBtn = document.getElementById('sortearBtn');

const captImg = document.getElementById('superhero');

const capth3 = document.getElementById('heroName');

const API_HEROES = () => fetch(`https://superheroapi.com/api.php/2443934729097811/${heroId()}/image`).then((response) => response.json());

captBtn.addEventListener('click', () => {
  API_HEROES().then((data) => {
    const { name, url } = data;
    Swal.fire({
      imageUrl: url,
      title: name,
    });
    captImg.setAttribute('src', url);
    capth3.innerText = name;
    console.log('oi');
  }).catch((error) => Swal.fire({
    title: 'Hero not found',
    text: error.message,
    icon: 'error',
    confirmButtonText: 'Cool',
  }));
});
