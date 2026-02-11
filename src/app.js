/* eslint-disable no-console */
'use strict';

// Write your code here
const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const mainGenerateNumber = generateRandomNumber();
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  terminal.question(
    // eslint-disable-next-line max-len
    'Write 4-digit number: ',
    (value) => {
      const validValue = checkIsValidUserInput(value);

      if (validValue === false) {
        console.log(
          // eslint-disable-next-line max-len
          'Write again! You need to choose 4-digit number that does not start with 0 and does not contain any duplicate digits.',
        );
        game();

        return;
      }

      const checkNumbers = getBullsAndCows(parseInt(value), mainGenerateNumber);

      if (checkNumbers.bulls === 4) {
        console.log('You win!!!');
        terminal.close();

        return;
      }

      console.log(checkNumbers);
      game();
    },
  );
}

console.log(
  'Hello! Let`s play Bulls & Cows game! I generated number - you try to guess!',
);
game();
