/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = generateRandomNumber();

const playGame = () => {
  terminal.question('Guess the number!\nInput: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('Input is incorrect!');

      terminal.close();

      return;
    }

    const { bulls, cows } = getBullsAndCows(input, secret);

    console.log(`Bulls: ${bulls} Cows: ${cows}`);

    if (bulls !== 4) {
      console.log('Try again!');

      playGame();

      return;
    }

    console.log('You won!');

    terminal.close();
  });
};

playGame();
