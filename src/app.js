/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

// Write your code here
const randomNumber = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function play() {
  rl.question('Guess the number:  ', (number) => {
    if (checkIsValidUserInput(number)) {
      console.log('You entered an invalid value');

      play();

      return;
    }

    const result = getBullsAndCows(number, randomNumber);

    if (result.bulls === 4) {
      console.log('You won!');
      rl.close();

      return;
    }

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
    play();
  });
}

play();
