const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];


function createBoard(){
    for( let i=0; i<cardArray.length; i++ ){

        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    
    }
}

createBoard();

function checkMatch(){

    const cards = document.querySelectorAll('img');
    const firstCard = cardsChosenId[0];
    const secondCard = cardsChosenId[1];


    //console.log('check for match');
    if (firstCard === secondCard){
        alert('You clicked on the same card twice');
        cards[firstCard].setAttribute('src', 'images/blank.png');
    }
    else if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match');
        cards[firstCard].setAttribute('src', 'images/white.png');
        cards[secondCard].setAttribute('src', 'images/white.png');
        cards[firstCard].removeEventListener('click', flipCard);
        cards[secondCard].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        //console.log(cardsWon);
        //console.log(cardsWon.length);

    }
    else {
        cards[firstCard].setAttribute('src', 'images/blank.png');
        cards[secondCard].setAttribute('src', 'images/blank.png');
        alert('Try again!');
    }
    
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];
    if( cardsWon.length === cardArray.length/2 ){
        resultDisplay.innerHTML = 'Congratulations, you found all the matches';
    }
    
}


function flipCard(){
    const cards = document.querySelectorAll('img');
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    //console.log(cardsChosen);
    //console.log(cardsChosenId);
    this.setAttribute('src', cardArray[cardId].img);
    if( cardsChosen.length === 2 ){
        setTimeout( checkMatch, 500 );
    }
    else if( cardsChosen.length > 2){
        alert('Clicked too many cards');
        cards[cardId].setAttribute('src', 'images/blank.png');
    }
    

}


















