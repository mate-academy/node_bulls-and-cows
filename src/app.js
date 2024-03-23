'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const numberToGuess = generateRandomNumber();

function guess() {
  terminal.question('Enter 4 different numbers: ', (data) => {
    if (checkIsValidUserInput(data)) {
      // eslint-disable-next-line no-console
      console.log(getBullsAndCows(+data, +numberToGuess));
    } else {
      // eslint-disable-next-line no-console
      console.log('Invalid input. Please enter 4 different numbers: ');
    }

    if (+data === numberToGuess) {
      // eslint-disable-next-line no-console
      console.log('You are a winner');
      terminal.close();

      return;
    }

    return guess();
  });
}

guess();
