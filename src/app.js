/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function startPlay() {
  rl.question('Your Number: ', (number) => {
    const userInput = number.trim();

    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Enter 4 different digits, first digit not 0.',
      );

      return startPlay();
    }

    const { bulls, cows } = getBullsAndCows(userInput, secretNumber);

    if (bulls === 4) {
      console.log(`Congratulations! True Number: ${secretNumber}`);
      rl.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      startPlay();
    }
  });
}

startPlay();
