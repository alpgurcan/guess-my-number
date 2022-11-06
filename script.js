'use strict';

//defining secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//defining score
let score = 20;
//defining highscore
let highscore = 0;
//handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //display message function
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  //when there is no input
  if (!guess) {
    displayMessage('🚨 No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🌞 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🥴 Too high!' : '😵 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💩 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
    //when guess is too high

    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '🥴 Too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💩 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //       document.querySelector('body').style.backgroundColor = 'red';
    //     }

    //     //when guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '😵 Too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💩 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //       document.querySelector('body').style.backgroundColor = 'red';
    //     }
  }
});

//again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
