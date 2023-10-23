//selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Initial conditions
score0El.textContent = 0
score1El.textContent = 0

let score = [0, 0]
let currentScore = 0
let currentPlayer = 0
//let clicks = 0

// switch player functionality
function switchPlayer() {
	currentScore = 0
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
	document.getElementById(`current--${currentPlayer}`).textContent = currentScore
	currentPlayer == 1 ? currentPlayer = 0 : currentPlayer =  1
}

// Rolling the dice
btnRoll.addEventListener('click', function () {
	//1 generate random number
	const dice = Math.trunc(Math.random() * 6) + 1
	// 1.5 counting the clicks
	//  clicks ++
	//2 display correct image
	diceEl.classList.remove('hidden')
	diceEl.src = `/src/dice-${dice}.png`
	// chekc if it's 1
	if (dice === 1) {
		//switch player
		switchPlayer()
	}/*else if (clicks >= 3) {
		currentScore += dice
		document.getElementById(`current--${currentPlayer}`).textContent = currentScore
	}*/ else {
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