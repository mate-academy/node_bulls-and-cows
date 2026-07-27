/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber().toString();
let isWin = false;

while (isWin) {
  rl.question('Input 4-digit number', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      throw new Error('Invalid input');
    }

    const result = getBullsAndCows(userInput, randomNumber);

    console.log(result);

    isWin = result.bulls === 4;

    rl.close();
  });
}
