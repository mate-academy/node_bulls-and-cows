'use strict';

/* eslint-disable no-console */

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log('Guess a 4-digit number with unique digits.');

function askForGuess() {
  rl.question('Your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Enter exactly 4 different digits' +
          ' and do not start with 0.',
      );
      askForGuess();

      return;
    }

    const result = getBullsAndCows(Number(userInput), numberToGuess);

    if (result.bulls === 4) {
      console.log(`You win! The number was ${numberToGuess}.`);
      rl.close();

      return;
    }

    console.log(`${result.bulls} bulls, ${result.cows} cows`);
    askForGuess();
  });
}

askForGuess();
