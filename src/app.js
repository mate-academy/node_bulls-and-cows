/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber().toString();
let attempts = 0;

function askForGuess() {
  terminal.question('Enter your guess (4-digit number): ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number without duplicate digits.',
      );

      return askForGuess();
    }

    const { bulls, cows } = getBullsAndCows(userInput, secretNumber);

    attempts++;

    console.log(`Attempts: ${attempts}, Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log(
        `Congratulations! You guessed the number in ${attempts} attempts!`,
      );
      terminal.close();
    } else {
      askForGuess();
    }
  });
}

askForGuess();
