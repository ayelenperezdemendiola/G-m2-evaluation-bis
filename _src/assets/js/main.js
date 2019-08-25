'use strict';

const inputs = document.querySelectorAll ('.input');
const button = document.querySelector ('.start__button');
const cardItem = document.querySelectorAll ('.list__card');
const cardList = document.querySelector ('.cards__list');
const listContainer = document.querySelector ('.list__container');
const adalabImage = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
let cardsToPlay = [];
let gameValue='';
let gameValueToPlay = '';
const defaultImage = 'https://via.placeholder.com/160x195/FF4500/ffffff/?text=?';
const api = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';


function showCard (event) {
  const currentContainer = event.currentTarget;
  const currentImgFront = currentContainer.querySelector ('.card__img-front');
  currentImgFront.classList.toggle ('show');
  const currentImgBack = currentContainer.querySelector ('.card__img-back');
  currentImgBack.classList.toggle ('hide');

}

function whenLoad (){
  console.log ('me han recargado');
  const saveGameValueToPlay = localStorage.getItem ('numberToPlay');
  gameValue = saveGameValueToPlay;
  console.log (saveGameValueToPlay);
  for (const input of inputs){
    const inputValue = input.value;
    console.log (inputValue);
    if (inputValue === saveGameValueToPlay){
      console.log (input);
      input.setAttribute ('checked', 'checked');
    }
  }
  //   if (inputValue === saveGameValueToPlay){
  //     input.setAttribute ('checked', 'checked');
  //   } else {
  //     console.log ('números restantes');
  //   }
  // }
  // const savedCards = JSON.parse(localStorage.getItem('cards'));
  // console.log (savedCards);
  // console.log(savedCards);
  // const cardFrontImg = document.querySelectorAll ('.card__img-front');
  // for (const image of cardFrontImg){
  //     console.log (image);
  // }
  // for (const cards of savedCards){
  //   console.log (cards);
  //   cardFrontImg.src = cards.img;

  //   ahora que las guardé tengo que hacer que se pinten. no sé como seguir.
  // }

}

function choosedValue (event){
  gameValue = event.currentTarget.value;
  localStorage.setItem('numberToPlay', gameValue);
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
    const cardNewImg5 = createNewImage ('img', 'card__img-front', 'pokemon image', defaultImage);
    cardNewImg5.classList.add ('newImgFront-5');
    const cardNewImgBack5 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem5Container.appendChild(cardNewImg5);
    cardNewItem5Container.appendChild(cardNewImgBack5);
    cardNewItem5.appendChild (cardNewItem5Container);
    listContainer.appendChild (cardNewItem5);

    const cardNewItem6 = createNewElement ('li', 'list__card');
    cardNewItem6.classList.add ('newItem-6');
    cardNewItem6.classList.add ('newItem');
    const cardNewImg6 = createNewImage ('img', 'card__img-front', 'pokemon image', defaultImage);
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
    const cardNewImg5 = createNewImage ('img', 'card__img-front', 'pokemon image', defaultImage);
    cardNewImg5.classList.add ('newImgFront-5');
    const cardNewImgBack5 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem5Container.appendChild(cardNewImg5);
    cardNewItem5Container.appendChild(cardNewImgBack5);
    cardNewItem5.appendChild (cardNewItem5Container);
    listContainer.appendChild (cardNewItem5);

    const cardNewItem6 = createNewElement ('li', 'list__card');
    cardNewItem6.classList.add ('newItem-6');

    const cardNewImg6 = createNewImage ('img', 'card__img-front', 'pokemon image', defaultImage);
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
    const cardNewImg7 = createNewImage ('img', 'card__img-front', 'pokemon image', defaultImage);
    cardNewImg7.classList.add ('newImgFront-7');
    const cardNewImgBack7 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem7Container.appendChild(cardNewImg7);
    cardNewItem7Container.appendChild(cardNewImgBack7);
    cardNewItem7.appendChild (cardNewItem7Container);
    listContainer.appendChild (cardNewItem7);

    const cardNewItem8 = createNewElement ('li', 'list__card');
    cardNewItem8.classList.add ('newItem-8');
    cardNewItem8.classList.add ('newItem');
    const cardNewImg8 = createNewImage ('img', 'card__img-front', 'pokemon image', defaultImage);
    cardNewImg8.classList.add ('newImgFront-8');
    const cardNewImgBack8 = createNewImage ('img', 'card__img-back', 'Adalab image', adalabImage);
    cardNewItem8Container.appendChild(cardNewImg8);
    cardNewItem8Container.appendChild(cardNewImgBack8);
    cardNewItem8.appendChild (cardNewItem8Container);
    listContainer.appendChild (cardNewItem8);

  } else {
    console.log ('soy una partida de 4');
  }
  const allCardsContainers = document.querySelectorAll ('.card__container');
  for (const container of allCardsContainers){
    container.addEventListener ('click', showCard);
  }
}

function remove (){
  const allNewCards = document.querySelectorAll ('.newItem');
  cardsToPlay = [];
  for (const card of allNewCards){
    const mother = card.parentElement;
    mother.removeChild (card);
  }
}
function start(){
  moreElementstoPlay ();
  const ENDPOINT = api + gameValue + '.json';
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const cardFrontImg = document.querySelectorAll ('.card__img-front');
      for (let i = 0; i < gameValue; i ++){
        const pokemonImg = data[i].image;
        cardFrontImg[i].src = pokemonImg;
        const pokemonName = data[i].name;
        const myPokemon = {};
        myPokemon.img = pokemonImg;
        myPokemon.name = pokemonName;
        //acá tengo que hacer que no se me repitan con el fin index of y el otro.
        cardsToPlay.push (myPokemon);
      }
      console.log (cardsToPlay);
      localStorage.setItem('cards', JSON.stringify(cardsToPlay));
    }
    );
}

//voy a probar de hacer un array con las cartas que me salen para jugar y después guardarlo en local storage, no sé muy bien cuándo recuperarlo. Podría A. hacer un objeto y poner carta y data y después guardarlo. o hacer directamente un array con las imagenes.
button.addEventListener('click', start);
window.addEventListener ('load', whenLoad);


