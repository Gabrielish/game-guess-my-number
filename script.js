'use strict'

/* console.log(document.querySelector('.message'))
document.querySelector('.message').textContent = 'Correct Number!ð'
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 20
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20
let highscore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(typeof guess, guess)

  // When there is no input
  if (!guess) {
    displayMessage('No number â')
    // document.querySelector('.message').textContent = 'No number â'

    // When player wins
  } else if (guess == secretNumber) {
    displayMessage('Correct Number!ð')
    // document.querySelector('.message').textContent = 'Correct Number!ð'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        // guess > secretNumber ? 'Too high! ð' : 'Too low! ð'
        displayMessage(guess > secretNumber ? 'Too high! ð' : 'Too low! ð')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('ð¥You lost the game')
      //   document.querySelector('.message').textContent = 'ð¥You lost the game';
      document.querySelector('.score').textContent = 0
    }
  }
  // When guess is too high
  /* else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high! ð'
            score-- //score = score - 1
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'ð¥You lost the game'
            document.querySelector('.score').textContent = 0
        }

    // When guess is too low
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low! ð'
            score-- //score = score - 1
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'ð¥You lost the game'
            document.querySelector('.score').textContent = 0
        }
        
    } */
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  //document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
