'use strict';

const inputs = document.querySelectorAll ('.input');
const button = document.querySelector ('.start__button');
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
      console.log (data[0].image);
    }
)
}



//hacer fetch
//hacer .then


button.addEventListener('click', start);

// Al hacer clic sobre el botón de 'Comenzar', nuestra aplicación debe recoger el valor del tamaño de la partida y conectarse a un API que devuelve un listado de cartas. La URL del API es https://raw.githubusercontent.com/Adalab/cards-data/master/:NUMERO.json, donde :NUMERO puede tomar el valor de 4, 6 u 8. Por ejemplo, para pedir 6 cartas usariamos https://raw.githubusercontent.com/Adalab/cards‒data/master/6.json
