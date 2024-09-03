'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);

const round = () => {
  terminal.question('Enter a number: ', (number) => {
    const randomNumber = generateRandomNumber();
    const isValidInput = checkIsValidUserInput(number);

    if (!isValidInput) {
      // eslint-disable-next-line no-console
      console.log(
        'Invalid input. Please enter a 4-digit number without duplicate digits',
      );
    } else {
      const bullsAndCows = getBullsAndCows(Number(number), randomNumber);

      if (bullsAndCows.bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('you are winner!!!');
        terminal.close();
      }

      // eslint-disable-next-line no-console
      console.log(
        `Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}. Try again.`,
      );
    }
    round();
  });
};

round();
