'use strict';

/* eslint-disable no-console */

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

const askGuess = () => {
  rl.question('Enter your guess: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('Invalid input! Enter a 4-digit number with unique digits.');

      return askGuess();
    }

    const { bulls, cows } = getBullsAndCows(secretNumber, input);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('🎉 Congratulations! You guessed the number!');
      rl.close();
    } else {
      askGuess();
    }
  });
};

askGuess();
