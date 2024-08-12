/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const randomNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  terminal.question('Guess number ', (num) => {
    const number = parseInt(num, 10);

    if (!checkIsValidUserInput(num)) {
      console.log('Invalid input. Please enter a valid 4-digit number.');

      return askQuestion();
    }

    if (number !== randomNumber) {
      getBullsAndCows(number, randomNumber);
      console.log('Try again.');

      return askQuestion();
    }

    console.log('Right number!!');
    terminal.close();
  });
}

console.log('randomNumber', randomNumber);

askQuestion();
