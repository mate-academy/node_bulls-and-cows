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

function askUserGuess() {
  rl.question('Enter a 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input');
      askUserGuess();

      return;
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === 4) {
      console.log('You guessed the number!');
      rl.close();

      return;
    }

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    askUserGuess();
  });
}

askUserGuess();
