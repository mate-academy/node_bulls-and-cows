/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

const question = (string) => {
  return new Promise(resolve => {
    return terminal.question(string, resolve);
  });
};

(async function game() {
  const numberToGuess = generateRandomNumber();
  let isWinner = false;

  console.log(
    'Hello player!\n',
    '\n',
    'Rules:\n',
    ' - Number must have 4 digits\n',
    ' - Number must not start with "0"\n',
    ' - Each digit in number must be unique\n'
  );

  while (!isWinner) {
    const inputNumber = await question('Enter your number: ');
    const validation = checkIsValidUserInput(inputNumber);

    if (validation) {
      const { bulls, cows } = getBullsAndCows(inputNumber, numberToGuess);

      if (bulls === 4) {
        isWinner = true;
      } else {
        console.log(
          `bulls: ${bulls}, cows: ${cows}\n`,
          'Try again... \n'
        );
      }
    } else {
      console.log('Pls enter valid number\n');
    }
  }

  console.log('YOU WON!!!');
  terminal.close();
})();
