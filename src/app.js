/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  const generatedNumber = generateRandomNumber();
  let usersDigits;

  function checkUsersNumber() {
    terminal.question('Enter a number of 4 different digits ', (number) => {
      const check = checkIsValidUserInput(number);

      if (!check) {
        console.log('enter valid number');

        return checkUsersNumber();
      }

      usersDigits = number;

      const { bulls, cows } = getBullsAndCows(usersDigits, generatedNumber);

      console.log(`bull(s): ${bulls} and cow(s): ${cows}`);

      if (bulls === 4) {
        console.log('You Won!');
        terminal.close();
      } else {
        checkUsersNumber();
      }
    });
  }

  checkUsersNumber();
}

game();
