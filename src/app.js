/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber().toString();

function askUserForGuess() {
  rl.question('Enter your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number without duplicates.',
      );
      askUserForGuess();

      return;
    }

    const result = getBullsAndCows(userInput, numberToGuess);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number.');
      rl.close();
    } else {
      askUserForGuess();
    }
  });
}

askUserForGuess();
