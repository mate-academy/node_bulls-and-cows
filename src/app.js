'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumnber = generateRandomNumber();

function bullsAndCows() {
  terminal.question('Guess a number\n', (number) => {
    const validatedNumber = checkIsValidUserInput(number);

    if (!validatedNumber) {
      return bullsAndCows();
    }

    getBullsAndCows(number, randomNumnber);

    if (+number !== randomNumnber) {
      bullsAndCows();
    } else {
      terminal.close();
    }
  });
}

bullsAndCows();
