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

const askGuess = () => {
  rl.question('Enter your guess (4-digit number): ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input. Please enter a 4-digit valid number.');

      return askGuess();
    }

    const { bulls, cows } = getBullsAndCows(Number(userInput), numberToGuess);

    if (bulls === 4) {
      console.log(
        `Congratulations! You've guessed the number ${numberToGuess} correctly!`,
      );
      rl.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      askGuess();
    }
  });
};

askGuess();
