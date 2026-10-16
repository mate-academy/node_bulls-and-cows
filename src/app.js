/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const randomNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  terminal.question('enter a four-digit number ', (userInput) => {
    const check = checkIsValidUserInput(userInput);

    if (!check) {
      console.log('not correct number');
      askQuestion();

      return;
    }

    const result = getBullsAndCows(userInput, randomNumber);

    console.log(result);

    if (result.bulls === 4) {
      console.log('You are the winner!!');
      terminal.close();
    } else {
      askQuestion();
    }
  });
}

askQuestion();
