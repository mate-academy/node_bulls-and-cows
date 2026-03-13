'use strict';

/* eslint-disable no-console */

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function askUser() {
  game.question('Guess the number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('You entered an invalid value');

      askUser();

      return;
    }

    const result = getBullsAndCows(userInput, numberToGuess);

    if (result.bulls === 4) {
      console.log('You won!');
      game.close();

      return;
    }

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    askUser();
  });
}

askUser();
