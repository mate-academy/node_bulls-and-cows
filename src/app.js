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

const randomNumber = generateRandomNumber();

function askQuestion() {
  rl.question('Guess the number ', (inputNumber) => {
    if (!checkIsValidUserInput(inputNumber)) {
      console.log(
        'Invalid input. Enter 4 different digits without starting with 0.',
      );
      askQuestion();
    }

    const result = getBullsAndCows(inputNumber, randomNumber);

    console.log(result);

    if (result.bulls === 4) {
      console.log('You won!');
      rl.close();

      return;
    }

    askQuestion();
  });
}

askQuestion();
