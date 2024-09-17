/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessedNumber = generateRandomNumber();

askUser();

function askUser() {
  readline.question('What number have I guessed? \n', (input) => {
    if (!checkIsValidUserInput(input)) {
      showErrorNotValid();
      askUser();

      return;
    }

    const { bulls, cows } = getBullsAndCows(parseInt(input), guessedNumber);

    if (bulls === 4) {
      showWinnerMsg();
    } else {
      showBullsAndCows(bulls, cows);
      askUser();

      return;
    }

    readline.close();
  });
}

function showErrorNotValid() {
  console.log(
    `\x1b[31m-----------------
The number should be a 4-digit number that does not start with 0 
and does not contain any duplicate digits.\n------------------`
  );

  console.log('\x1b[34mTry again... ');
  console.log('\x1b[0m \n');
}

function showBullsAndCows(bulls, cows) {
  console.log(
    `\x1b[34m-----------------
Bulls: ${bulls} 
Cows: ${cows} \n------------------`
  );

  console.log('\x1b[34mTry again... ');
  console.log('\x1b[0m \n');
}

function showWinnerMsg() {
  console.log(
    `\n\x1b[35m-----------------
Congratulations!!! 
You won! \n------------------`
  );

  console.log('\x1b[0m \n');
}
