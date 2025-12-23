/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { askUser, printResult, closeInput } = require('./modules/io');

// Write your code here

const secretNumber = generateRandomNumber();

function gameLoop() {
  askUser('Enter your 4-digit guess: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('Invalid input! Try again.');

      return gameLoop();
    }

    const { bulls, cows } = getBullsAndCows(input, secretNumber);

    printResult(bulls, cows);

    if (bulls === 4) {
      console.log('You win!');
      closeInput();
    } else {
      gameLoop();
    }
  });
}

gameLoop();
