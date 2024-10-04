/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

const askQuestion = () => {
  terminal.question(`Please, enter a number `, (num) => {
    const userNumber = checkIsValidUserInput(num);

    if (!userNumber) {
      console.log('Invalid input. ');
    } else {
      const bullsAndCows = getBullsAndCows(Number(num), randomNumber);

      if (bullsAndCows.bulls === 4) {
        console.log('Cngrats you are winner');
        terminal.close();

        return;
      }

      console.log(
        `Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}. Try again.`,
      );
    }

    askQuestion();
  });
};

askQuestion();
