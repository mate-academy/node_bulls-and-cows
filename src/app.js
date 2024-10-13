/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumber = generateRandomNumber();

const askForInput = () => {
  terminal.question('Enter a number of 4 different digits: ', (number) => {
    if (!checkIsValidUserInput(String(number))) {
      console.log(
        'Invalid input. Please enter a 4-digit number with unique digits that does not start with 0.',
      );

      return askForInput(); // Запрашиваем ввод снова
    }

    console.log(`Your input: ${number}`);

    const { bulls, cows } = getBullsAndCows(+number, randomNumber);

    if (bulls === 4) {
      console.log('you win');
      terminal.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      askForInput(); // Запрашиваем ввод снова
    }
  });
};

askForInput();
