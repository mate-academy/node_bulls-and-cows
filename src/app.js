/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log('Welcome to Bulls and Cows!');

console.log(
  'I have generated a random 4-digit number with unique digits. Can you guess it?',
);

function promptUser() {
  rl.question('Enter your guess (4 unique digits): ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input! Please enter 4 unique digits, starting with a non-zero.',
      );

      return promptUser();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    console.log(`${bulls} bull(s) and ${cows} cow(s)`);

    if (bulls === 4) {
      console.log('Congratulations! You guessed the correct number!');
      rl.close();
    } else {
      promptUser();
    }
  });
}

promptUser();
