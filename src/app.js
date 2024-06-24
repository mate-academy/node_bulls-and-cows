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

function askForGuess() {
  rl.question('Enter your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      askForGuess();
    } else {
      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        console.log('Congratulations! You guessed the number.');
        rl.close();
      } else {
        askForGuess();
      }
    }
  });
}

askForGuess();
