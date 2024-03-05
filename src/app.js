/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

function bullsAndCows() {
  const numberToGuess = generateRandomNumber();

  terminal.question('Guess 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input');
      bullsAndCows();
    } else {
      const result = getBullsAndCows(userInput, numberToGuess);

      console.log(`Number: ${numberToGuess}, result: `, result);

      if (result.bulls === 4) {
        console.log('You win!');
        terminal.close();
      } else {
        bullsAndCows();
      }
    };
  });
}

module.exports = {
  bullsAndCows,
};
