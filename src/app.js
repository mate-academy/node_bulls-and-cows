/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askGuess() {
  rl.question('Enter your guess ', (answer) => {
    const guess = answer.trim();

    if (!checkIsValidUserInput(guess)) {
      console.log('Invalid input! Must to 4 different digits.');

      return askGuess();
    }

    const result = getBullsAndCows(guess, numberToGuess);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('You guessed the number!');
      rl.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
