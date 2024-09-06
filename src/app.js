'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);

const game = () => {
  terminal.question(`Please, enter a number `, (num) => {
    const randomNumber = generateRandomNumber();
    const userNumber = checkIsValidUserInput(num);

    if (!userNumber) {
      // eslint-disable-next-line no-console
      console.log(
        'Invalid input. Please enter a 4-digit number without duplicate digits',
      );
    } else {
      const bullsAndCows = getBullsAndCows(Number(num), randomNumber);

      if (bullsAndCows.bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('You are winner!!!');
        terminal.close();
      }

      // eslint-disable-next-line no-console
      console.log(
        `Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}. Try again.`,
      );
    }

    game();
  });
};

game();
