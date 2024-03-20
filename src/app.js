'use strict';

/* eslint-disable no-console */
const readline = require('readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const number = generateRandomNumber();

  guessNumber(number);
}

function guessNumber(number) {
  terminal.question('Enter a number', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Error! Enter 4 digits number');

      guessNumber(number);
    }

    const result = getBullsAndCows(userInput, number);

    if (result.bulls === 4) {
      terminal.close();
      console.log('You win!');
    } else {
      console.log(result);
      guessNumber(number);
    }
  });
}

startGame();
