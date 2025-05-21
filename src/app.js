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

    const res = getBullsAndCows(number, randomNumnber);

    // eslint-disable-next-line no-console
    console.log(`The result is ${res.bulls} bull(s) and ${res.cows} cow(s)`);

    if (+number !== randomNumnber) {
      bullsAndCows();
    } else {
      terminal.close();
    }
  });
}

bullsAndCows();
