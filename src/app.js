/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

const randomNumber = generateRandomNumber();
let input = null;

async function ask() {
  while (true) {
    const number = await new Promise((resolve) => {
      terminal.question(
        'Type 4 digits',
        resolve
      );
    });

    const isValid = checkIsValidUserInput(number);

    if (isValid) {
      input = number;
      break;
    } else {
      console.log('Invalid value');
    }
  }
}

async function play() {
  while (true) {
    await ask();

    if (+input === randomNumber) {
      terminal.write('You win!');
      break;
    }

    const result = getBullsAndCows(input, randomNumber);

    console.log(result);
  }

  terminal.close();
}

play();
