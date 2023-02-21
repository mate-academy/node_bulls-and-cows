/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { generateNumber } = require('./numberGenerator.js');
const { calculateBullsAndCows } = require('./calculatorBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = generateNumber();

const game = () => {
  terminal.question('Enter a number: ', (guess) => {
    const isValidNumber = Number.isInteger(Number(guess))
      && new Set(guess).size === 4;

    if (isValidNumber) {
      console.log(`Your number is: ${guess}`);
    } else {
      console.log('Invalid input, enter a number of 4 different digits!');

      return game();
    }

    const { bulls, cows } = calculateBullsAndCows(secret, guess);

    if (bulls === 4) {
      console.log('You won!');
      terminal.close();
    } else {
      console.log(`Bulls: ${bulls}, cows: ${cows}. Try again!`);

      return game();
    }
  });
};

module.exports = { game };
