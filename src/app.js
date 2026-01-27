'use strict';

/* eslint-disable no-console */
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = generateRandomNumber();

console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

function askQuestion() {
  rl.question('Enter your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log('Invalid input! Try again (4 unique digits, no 0 at start).');

      return askQuestion();
    }

    const result = getBullsAndCows(answer, secret);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      askQuestion();
    }
  });
}

askQuestion();
