'use strict';

/* console.log(document.querySelector('.message'))
document.querySelector('.message').textContent = 'Correct Number!🎉'
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 20
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = secretNumber

let score = 20

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof guess, guess)

    if(!guess) {
        document.querySelector('.message').textContent = 'No number ⛔'
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!🎉'
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high! 📈'
            score-- //score = score - 1
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '💥You lost the game'
            document.querySelector('.score').textContent = 0
        }
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low! 📉'
            score-- //score = score - 1
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '💥You lost the game'
            document.querySelector('.score').textContent = 0
        }
        
    }
})