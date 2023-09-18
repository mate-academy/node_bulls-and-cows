/* eslint-disable no-console */
'use strict';

const { WIN_GUESS } = require('./constants');

const readline = require('readline');
const { generateRandomNumber } = require('./numberGenerator');
const { calculateBullsAndCows } = require('./bullsAndCowsCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function playGame() {
  rl.question('Enter your guess: ', (guessedNumber) => {
    if (guessedNumber.length !== WIN_GUESS || !/^\d{4}$/.test(guessedNumber)) {
      playGame();

      return;
    }

    const result = calculateBullsAndCows(secretNumber, guessedNumber);

    if (result.bulls === WIN_GUESS) {
      console.log('Congratulations you are win!!!!');
      rl.close();
    } else {
      // eslint-disable-next-line no-console
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      playGame();
    }
  });
}

playGame();
