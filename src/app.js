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

function askQuestion() {
  rl.question('Input 4-digit number', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input');
      askQuestion();

      return;
    }

    const result = getBullsAndCows(userInput, randomNumber);

    console.log(result);

    if (result.bulls === 4) {
      console.log('You win');
      rl.close();
    } else {
      askQuestion();
    }
  });
}

askQuestion();
