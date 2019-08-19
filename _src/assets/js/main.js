'use strict';

const inputs = document.querySelectorAll ('.input');
const button = document.querySelector ('.start__button');
const cardFrontImg = document.querySelectorAll ('.card__img-front');
let gameValue='';
const api = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

function choosedValue (event){
  gameValue = event.currentTarget.value;
  console.log (gameValue);
}

for (const input of inputs){
  input.addEventListener ('click', choosedValue);
}

function start(){
  const ENDPOINT = api + gameValue + '.json';
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < gameValue; i ++){
        const pokemonImg = data[i].image;
        cardFrontImg[i].src = pokemonImg;

      }
      //recoger mis datos de html en constantes
      //comprobar que funcionan las imagenes para 4.
      //hacer que si pido mas cartas se agregen más lis o menos lis
    }
)
}



//hacer fetch
//hacer .then


button.addEventListener('click', start);

// Al hacer clic sobre el botón de 'Comenzar', nuestra aplicación debe recoger el valor del tamaño de la partida y conectarse a un API que devuelve un listado de cartas. La URL del API es https://raw.githubusercontent.com/Adalab/cards-data/master/:NUMERO.json, donde :NUMERO puede tomar el valor de 4, 6 u 8. Por ejemplo, para pedir 6 cartas usariamos https://raw.githubusercontent.com/Adalab/cards‒data/master/6.json
