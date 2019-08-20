'use strict';

const inputs = document.querySelectorAll ('.input');
const button = document.querySelector ('.start__button');
const cardItem = document.querySelectorAll ('.list__card');
const cardList = document.querySelector ('.cards__list');
const listContainer = document.querySelector ('.list__container');
const adalabImage = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
let gameValue='';
const api = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';


function choosedValue (event){
  gameValue = event.currentTarget.value;
  console.log (gameValue);
}

for (const input of inputs){
  input.addEventListener ('click', choosedValue);
}

function createNewElement (myElement, myclass){
  const newElement = document.createElement (myElement);
  newElement.classList.add (myclass);
  return newElement;
}

function createNewImage (myImg, myClass, myAlt, mySrc){
  const newImage = document.createElement (myImg);
  newImage.classList.add (myClass);
  newImage.alt = myAlt;
  newImage.src = mySrc;
  return newImage;
}

function moreElementstoPlay (){
  remove ();
  const cardNewItem5Container = createNewElement('div', 'card__container');
  cardNewItem5Container.classList.add ('new-card');
  const cardNewItem6Container = createNewElement('div', 'card__container');
  cardNewItem6Container.classList.add ('new-card');
  const cardNewItem7Container = createNewElement('div', 'card__container');
  cardNewItem7Container.classList.add ('new-card');
  const cardNewItem8Container = createNewElement('div', 'card__container');
  cardNewItem8Container.classList.add ('new-card');

  if (gameValue > 4 && gameValue <= 6){
    const cardNewItem5 = createNewElement ('li', 'list__card');
    cardNewItem5.classList.add ('newItem-5');
    cardNewItem5.classList.add ('newItem');
    const cardNewImg5 = createNewImage ('img', 'card__img-front', 'pokemon image', '');
    cardNewImg5.classList.add ('newImgFront-5');
    const cardNewImgBack5 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem5Container.appendChild(cardNewImg5);
    cardNewItem5Container.appendChild(cardNewImgBack5);
    cardNewItem5.appendChild (cardNewItem5Container);
    listContainer.appendChild (cardNewItem5);

    const cardNewItem6 = createNewElement ('li', 'list__card');
    cardNewItem6.classList.add ('newItem-6');
    cardNewItem6.classList.add ('newItem');
    const cardNewImg6 = createNewImage ('img', 'card__img-front', 'pokemon image', '');
    cardNewImg6.classList.add ('newImgFront-6');
    const cardNewImgBack6 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem6Container.appendChild(cardNewImg6);
    cardNewItem6Container.appendChild(cardNewImgBack6);
    cardNewItem6.appendChild (cardNewItem6Container);
    listContainer.appendChild (cardNewItem6);

  } else if (gameValue > 6 && gameValue <= 8){

    const cardNewItem5 = createNewElement ('li', 'list__card');
    cardNewItem5.classList.add ('newItem-5');
    cardNewItem5.classList.add ('newItem');
    const cardNewImg5 = createNewImage ('img', 'card__img-front', 'pokemon image', '');
    cardNewImg5.classList.add ('newImgFront-5');
    const cardNewImgBack5 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem5Container.appendChild(cardNewImg5);
    cardNewItem5Container.appendChild(cardNewImgBack5);
    cardNewItem5.appendChild (cardNewItem5Container);
    listContainer.appendChild (cardNewItem5);

    const cardNewItem6 = createNewElement ('li', 'list__card');
    cardNewItem6.classList.add ('newItem-6');

    const cardNewImg6 = createNewImage ('img', 'card__img-front', 'pokemon image', '');
    cardNewImg6.classList.add ('newImgFront-6');
    cardNewItem6.classList.add ('newItem');
    const cardNewImgBack6 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem6Container.appendChild(cardNewImg6);
    cardNewItem6Container.appendChild(cardNewImgBack6);
    cardNewItem6.appendChild (cardNewItem6Container);
    listContainer.appendChild (cardNewItem6);

    const cardNewItem7 = createNewElement ('li', 'list__card');
    cardNewItem7.classList.add ('newItem-7');
    cardNewItem7.classList.add ('newItem');
    const cardNewImg7 = createNewImage ('img', 'card__img-front', 'pokemon image', '');
    cardNewImg7.classList.add ('newImgFront-7');
    const cardNewImgBack7 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem7Container.appendChild(cardNewImg7);
    cardNewItem7Container.appendChild(cardNewImgBack7);
    cardNewItem7.appendChild (cardNewItem7Container);
    listContainer.appendChild (cardNewItem7);

    const cardNewItem8 = createNewElement ('li', 'list__card');
    cardNewItem8.classList.add ('newItem-8');
    cardNewItem8.classList.add ('newItem');
    const cardNewImg8 = createNewImage ('img', 'card__img-front', 'pokemon image', '');
    cardNewImg8.classList.add ('newImgFront-8');
    const cardNewImgBack8 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem8Container.appendChild(cardNewImg8);
    cardNewItem8Container.appendChild(cardNewImgBack8);
    cardNewItem8.appendChild (cardNewItem8Container);
    listContainer.appendChild (cardNewItem8);

  } else {
  //No sé cómo hacer para que no se me repitan
    console.log ('soy una partida de 4');

  }

}

function remove (){
  const allNewCards = document.querySelectorAll ('.newItem');
  for (const card of allNewCards){
    const mother = card.parentElement;
    mother.removeChild (card);
  }
}



function start(){
  const ENDPOINT = api + gameValue + '.json';
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      moreElementstoPlay();
      const cardFrontImg = document.querySelectorAll ('.card__img-front');
      for (let i = 0; i < gameValue; i ++){
        const pokemonImg = data[i].image;
        cardFrontImg[i].src = pokemonImg;
      }
    }
    );
}


button.addEventListener('click', start);

// Al hacer clic sobre el botón de 'Comenzar', nuestra aplicación debe recoger el valor del tamaño de la partida y conectarse a un API que devuelve un listado de cartas. La URL del API es https://raw.githubusercontent.com/Adalab/cards-data/master/:NUMERO.json, donde :NUMERO puede tomar el valor de 4, 6 u 8. Por ejemplo, para pedir 6 cartas usariamos https://raw.githubusercontent.com/Adalab/cards‒data/master/6.json
