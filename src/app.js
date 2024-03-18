'use strict';

const readline = require('readline');
const { log } = require('console');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface(process.stdin, process.stdout);

const chooseNumber = () =>
  terminal.question('Enter the 4-digit unique number: ', (input) => {
    const generatedNumber = generateRandomNumber();
    const isValidInput = checkIsValidUserInput(input);

    if (!isValidInput) {
      log('Invalid input. Try again.');
      chooseNumber();

      return;
    }

    if (input === generatedNumber) {
      log('Congratulations! You won!');
      terminal.close();

      return;
    }

    const { bulls, cows } = getBullsAndCows(input, generatedNumber);

    log(`Your result is: Bulls - ${bulls}, Cows - ${cows}`);
    chooseNumber();
  });

chooseNumber();
