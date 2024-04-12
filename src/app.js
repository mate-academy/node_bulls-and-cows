/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validNumber = generateRandomNumber();

const playGame = () => {
  rl.question(`Guess number`, (num) => {
    if (!checkIsValidUserInput(num)) {
      console.log('Invalid number');
      playGame();

      return;
    }

    const { bulls, cows } = getBullsAndCows(num, validNumber);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('Congratulations. You win');
      rl.close();
    } else {
      playGame();
    }
  });
};

playGame();
