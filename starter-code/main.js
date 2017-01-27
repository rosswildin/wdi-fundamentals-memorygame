console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = [];

/* if (cardTwo === cardFour) {
	alert ("You found a match!");
} else {
	alert ("Sorry, try again.");
} */

var isTwoCards = function() {

	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(cardsInPlay);

	if (this.getAttribute('data-card') ==='king') {
		this.innerHTML = '<img src="/Users/rosswildin/fundamentals/king.png" alt="King of Spades" class="imagesize">';

	} else if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="/Users/rosswildin/fundamentals/queen.png" alt="Queen of Diamonds" class="imagesize">';

	}

	if (cardsInPlay.length === 2) {
		setTimeout(function() {
			isMatch(cardsInPlay);
			clearBoard();
			cardsInPlay = [];
		}, 1000);	

	} 
}

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i=0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		
		console.log(document.getElementById('game-board'));

		document.getElementById('game-board').appendChild(newCard);
		newCard.addEventListener('click', isTwoCards);
	}
}

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!");
	}
	else {
		alert ("Sorry, try again.");
	}
}

var clearBoard = function() {
	var cards = document.getElementsByClassName('card');
	console.log(cards);

	for (i=0; i < cards.length; i++) {
		cards[i].innerHTML = '';
	}
}

createBoard();





