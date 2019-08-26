'use strict';

const inputs = document.querySelectorAll ('.input');
const button = document.querySelector ('.start__button');
const cardItem = document.querySelectorAll ('.list__card');
const cardList = document.querySelector ('.cards__list');
const listContainer = document.querySelector ('.list__container');
const adalabImage = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
let cardsToPlay = [];
let gameValue='';
const defaultImage = 'https://via.placeholder.com/160x195/FF4500/ffffff/?text=?';
const api = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
let cardFrontImg = '';
let namesArr = [];
let firstClickName = '';
let firstClickContainer = '';
let firstClickContainerBack = '';
let secondClickName = '';
let secondClickContainer = '';
let secondClickContainerBack = '';
// Cuando se hace clic en una primera carta esta se da la vuelta y nos muestra su pokemon (como hasta ahora).
// Al hacer clic en una segunda carta esta se da la vuelta y: si es la pareja de la primera las dos se quedan boca arriba (como hasta ahora),


function showCard (event) {
  const currentContainer = event.currentTarget;
  const currentImgFront = currentContainer.querySelector ('.card__img-front');
  const currentImgName = currentImgFront.getAttribute('data--name');
  currentImgFront.classList.toggle ('show');
  const currentImgBack = currentContainer.querySelector ('.card__img-back');
  currentImgBack.classList.toggle ('hide');

  const currentElement = {};
  currentElement.name = currentImgName;
  currentElement.container = currentImgFront;
  currentElement.back = currentImgBack;
  namesArr.push(currentElement);

  firstClickName = namesArr[0].name;
  firstClickContainer = namesArr[0].container;
  firstClickContainerBack = namesArr[0].back;

  secondClickName = namesArr[1].name;
  secondClickContainer = namesArr[1].container;
  secondClickContainerBack = namesArr[1].back;

  if (firstClickName === secondClickName === true){
    console.log ('¡You won!');
  } else if (firstClickName === secondClickName !== true){
    notMatch();
  }
}

function notMatch (){
  console.log ('try again');
  firstClickContainer.classList.add ('hide');
  secondClickContainer.classList.add ('hide');
  firstClickContainerBack.classList.remove ('hide');
  secondClickContainerBack.classList.remove ('hide');
  firstClickContainerBack.classList.add ('show');
  secondClickContainerBack.classList.add ('show');
}
setTimeout(notMatch, 2000);

function hideCards (){
  const imgFront = document.querySelectorAll ('.card__img-front');
  const imgBack = document.querySelectorAll ('.card__img-back');
  for(const img of imgFront){
    img.classList.remove ('show');
  }
  for (const img of imgBack){
    img.classList.add ('show');
    img.classList.remove ('hide');
  }
}

function whenLoad (){
  console.log ('me han recargado');
  const saveGameValueToPlay = localStorage.getItem ('numberToPlay');
  const savedCards = JSON.parse(localStorage.getItem('cards'));
  gameValue = saveGameValueToPlay;
  moreElementstoPlay();
  const loadCardFrontImg = document.querySelectorAll('.card__img-front');
  for (const input of inputs){
    const inputValue = input.value;
    if (inputValue === saveGameValueToPlay){
      input.setAttribute ('checked', 'checked');
    }
  }
  for (let i = 0; i < gameValue; i ++){
    loadCardFrontImg[i].src = savedCards[i].img;
  }
}

function choosedValue (event){
  gameValue = event.currentTarget.value;
  localStorage.setItem('numberToPlay', gameValue);
  console.log (gameValue);
}

for (const input of inputs){
  input.addEventListener ('click', choosedValue);
  input.addEventListener ('click', hideCards);
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
      cardFrontImg = document.querySelectorAll ('.card__img-front');
      for (let i = 0; i < gameValue; i ++){
        const pokemonImg = data[i].image;
        cardFrontImg[i].src = pokemonImg;
        const pokemonName = data[i].name;
        cardFrontImg[i].setAttribute('data--name', data[i].name);
        const myPokemon = {};
        myPokemon.img = pokemonImg;
        myPokemon.name = pokemonName;
        cardsToPlay.push (myPokemon);
      }
      localStorage.setItem('cards', JSON.stringify(cardsToPlay));
    }
    );
}

button.addEventListener('click', start);
window.addEventListener ('load', whenLoad);


