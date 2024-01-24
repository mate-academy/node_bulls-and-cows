/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const generateRandomNumber = require('./modules/generateRandomNumber');
const getBullsAndCows = require('./modules/generateRandomNumber');

const readline = require('readline');
const checkIsValidUserInput = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

const game = () => {
  terminal.question('guess the number from 1234 to 9876 composed of four different numbers', (number) => {
    if (checkIsValidUserInput(Number(number))) {
      const { bulls, cow } = getBullsAndCows(number.toString(), randomNumber.toString());

      console.log(`You got ${bulls} bulls and ${cow}, try again!`);

      if (bulls === 4) {
        console.log(`Congratulations! You did the impossible and guessed the number!`);
        terminal.close();
      } else {
        game();
      }
    } else {
      console.log('the number you entered is incorrect. It must be between 1234 and 9876, the numbers cannot be repeated. Try again!');
      game();
    }
  });
};

game();
