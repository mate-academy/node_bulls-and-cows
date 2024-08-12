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

const numberToGuess = generateRandomNumber().toString();

function questionForUser() {
  terminal.question('Enter your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number without duplicates.',
      );
      questionForUser();

      return;
    }

    const result = getBullsAndCows(userInput, numberToGuess);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number.');
      terminal.close();
    } else {
      questionForUser();
    }
  });
}

questionForUser();
