/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numberToGuess = generateRandomNumber();

console.log('Guess the 4-digit number with all different digits.');

function ask() {
  terminal.question('Your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number with different digits.',
      );

      return ask();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    console.log(`${bulls} bulls and ${cows} cows`);

    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      terminal.close();
    } else {
      ask();
    }
  });
}

ask();
