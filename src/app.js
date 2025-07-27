'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNum = generateRandomNumber();

terminal.question(
  'Pls write number witch have 4 numbers',
  function userWrited(number) {
    const okNumber = checkIsValidUserInput(number);

    if (!okNumber) {
      terminal.question('Pls write valid number', userWrited);
    }

    const { bulls, cows } = getBullsAndCows(number, randomNum);

    if (number !== randomNum) {
      terminal.question(
        `Don't worry now you have ${bulls} and ${cows}. Try to do it again `,
        userWrited,
      );
    } else {
      terminal.close();
    }
  },
);
