'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

function startGame() {
  const randomNumber = generateRandomNumber();
  enterDigits(randomNumber);
}

function enterDigits(randomNumber) {
  terminal.question('Enter a 4-digit number: ', (digits) => {
    const isValid = checkIsValidUserInput(digits);

    if (!isValid) {
      terminal.write('Invalid input.\n');

      return enterDigits(randomNumber);
    }

    const digitsAsNumber = Number(digits);

    const result = getBullsAndCows(digitsAsNumber, randomNumber);

    if (result.bulls === 4) {
      terminal.write(`Congratulations! You've guessed the number.`);
      terminal.close();
    } else {
      terminal.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);
      enterDigits(randomNumber);
    }
  });
}

startGame();
