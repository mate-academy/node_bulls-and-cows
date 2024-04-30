'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNum = generateRandomNumber();

function askForNumber() {
  let isValidInput = false;

  while (!isValidInput) {
    terminal.question('Enter a number of 4 different digits', (digits) => {
      if (checkIsValidUserInput(digits)) {
        const result = getBullsAndCows(digits, randomNum);

        process.stdout.write(`Result: ${JSON.stringify(result)}\n`);

        if (result.bulls === 4) {
          terminal.close();
          process.stdout.write(`You guessed all numbers. Game is over!`);
        } else {
          isValidInput = true;
        }
      } else {
        process.stdout.write(
          `You entered incorrect numbers. Please try again.\n`,
        );
      }
    });
  }
}

askForNumber();
