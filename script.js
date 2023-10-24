//selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
//buttons
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
// Initial conditions
score0El.textContent = 0
score1El.textContent = 0

let score = [0, 0]
let currentScore = 0
let currentPlayer = 0

//functia de count a click-urilor pe btnRoll
let clicks = 0
btnRoll.addEventListener('click', function(){
	clicks++
})

// switch player functionality
function switchPlayer() {
	currentScore = 0
	clicks = 0;
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
	document.getElementById(`current--${currentPlayer}`).textContent = currentScore
	currentPlayer == 1 ? currentPlayer = 0 : currentPlayer =  1
}

// Rolling the dice
btnRoll.addEventListener('click', function () {
	//1 generate random number
	const dice = Math.trunc(Math.random() * 6) + 1
	//2 display correct image
	diceEl.classList.remove('hidden')
	diceEl.src = `/src/dice-${dice}.png`
	// chekc if it's 1
	if (dice === 1) {
		//switch player
		switchPlayer()
	}else if (clicks > 2) {
		currentScore += dice
		document.getElementById(`current--${currentPlayer}`).textContent = currentScore
		score[currentPlayer] += currentScore
		document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer]
		switchPlayer()
	} else {
		//adaugam scorul
		currentScore += dice
		document.getElementById(`current--${currentPlayer}`).textContent = currentScore
	}
})

// Hold functionality
btnHold.addEventListener('click', function () {
	//1 add current score to player score
	score[currentPlayer] += currentScore
	document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer]
	// switch player
	switchPlayer()
	//2 check if win (score >= 100)
	if (score[currentPlayer] >= 100) {
		document.querySelector('.player--active').classList.add('player--winner')
	}
})

// New game
btnNew.addEventListener('click', function(){
	score0El.textContent = 0
	score1El.textContent = 0
	score = [0, 0]
	currentScore = 0
	currentPlayer = 0
	diceEl.classList.add('hidden')
	player0El.classList.add('player--active')
	player1El.classList.remove('player--active')
	current0El.textContent = currentScore
	current1El.textContent = currentScore
	clicks = 0
})