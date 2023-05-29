/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const generateNumber = require('./numberGenerator');
const calculateGuess = require('./calculateGuess');
const validateGuess = require('./validateGuess');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateNumber();

function playGame() {
  rl.question('Guess the number: ', (guess) => {
    if (guess === 'exit') {
      console.log(`The secret number was ${secretNumber}.`);
      rl.close();

      return;
    }

    if (!validateGuess(guess)) {
      console.log('Invalid guess! Try again.');
      playGame();

      return;
    }

    const { bulls, cows } = calculateGuess(secretNumber, guess);

    if (bulls === 4) {
      console.log('You win!');
      rl.close();
    } else {
      console.log(`${bulls} bulls and ${cows} cows`);
      console.log(`You can enter 'exit' to quit.`);
      console.log(' ');
      playGame();
    }
  });
}

playGame();
