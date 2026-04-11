/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

console.log('Welcome to Bulls and Cows!');
console.log('I have generated a random 4-digit number for you to guess.');

console.log('Try to guess the number.');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForGuess() {
  rl.question('Enter your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit number that does not start with 0 and does not contain duplicate digits.',
      );
      askForGuess();

      return;
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      askForGuess();
    }
  });
}

askForGuess();
