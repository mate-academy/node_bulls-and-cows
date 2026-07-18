/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question('Enter a 4-digits number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input.Try again');
      ask();
    } else {
      const result = getBullsAndCows(userInput, numberToGuess);

      console.log(`${result.bulls} bulls and ${result.cows} cows`);

      if (result.bulls === 4) {
        rl.close();
      } else {
        ask();
      }
    }
  });
}

ask();

module.exports = {
  ask,
};
