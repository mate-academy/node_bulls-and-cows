/* eslint-disable no-console */

'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNumber = generateRandomNumber();
const terminal = readline.createInterface(process.stdin, process.stdout);

function play() {
  terminal.question('Guess a 4-digit number: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('You must type a 4-digit number where each digit is unique');

      return play();
    }

    const result = getBullsAndCows(Number(input), randomNumber);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number!');

      return terminal.close();
    }

    console.log(result);

    play();
  });
}

play();
