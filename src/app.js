'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const {
  printResult,
  printInvalidInput,
  printWinMessage,
} = require('./modules/io');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function ask() {
  rl.question('Enter a 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      printInvalidInput();

      return ask();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    printResult(bulls, cows);

    if (bulls === 4) {
      printWinMessage();
      rl.close();
    } else {
      ask();
    }
  });
}

ask();
