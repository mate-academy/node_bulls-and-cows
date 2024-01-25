/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randNumber = generateRandomNumber();

const game = (randomNumber) => {
  terminal.question('guess the number from 1234 to 9876 composed of four different numbers', (number) => {
    const isNumberCorrect = checkIsValidUserInput(Number(number));

    if (!isNumberCorrect) {
      console.log('the number you entered is incorrect. It must be between 1234 and 9876, the numbers cannot be repeated. Try again!');
      game();
    }

    const { bulls, cow } = getBullsAndCows(number.toString(), randomNumber.toString());

    console.log(`You got ${bulls} bulls and ${cow}, try again!`);

    if (bulls === 4) {
      console.log(`Congratulations! You did the impossible and guessed the number!`);
      terminal.close();
    } else {
      game();
    }
  });
};

game(randNumber);
