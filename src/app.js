'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function startBullsAndCows() {
  readLine.question('Enter a 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      readLine.close();

      return;
    }

    const { bulls } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === 4) {
      readLine.close();
    } else {
      startBullsAndCows();
    }
  });
}

startBullsAndCows();
