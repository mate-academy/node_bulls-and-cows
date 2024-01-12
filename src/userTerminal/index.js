'use strict';

const readline = require('readline');
const {
  hasFourDifferentDigits,
  compareNumbers,
} = require('../bullsAndCowsCheсk/bullsAndCowsCheсk');
const randomDigits = require('../random');

const userTerminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = randomDigits();

function playGame() {
  userTerminal.question('Enter a 4-digit number: ', (guessedNumber) => {
    if (!/^\d{4}$/.test(guessedNumber)) {
      // eslint-disable-next-line no-console
      console.log('Please enter a valid 4-digit number.');
      playGame();

      return;
    }

    if (!hasFourDifferentDigits(guessedNumber)) {
      // eslint-disable-next-line no-console
      console.log('Please enter a number with exactly 4 different digits.');
      playGame();

      return;
    }

    const result = compareNumbers(secretNumber, guessedNumber);

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('Congratulations! You guessed the number!');
      userTerminal.close();
    } else {
      playGame();
    }
  });
}

playGame();

module.exports = playGame;
