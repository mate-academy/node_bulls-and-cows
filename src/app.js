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

const generate = generateRandomNumber();

console.log('I have generated a 4-digit number. Try to guess it!');

function promptUser() {
  console.log('');

  rl.question('Enter your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('');
      promptUser();
    } else {
      const userGuess = parseInt(userInput, 10);
      const result = getBullsAndCows(userGuess, generate);

      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

      if (result.bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        console.log(generate);
        rl.close();
      } else {
        promptUser();
      }
    }
  });
}

promptUser();
