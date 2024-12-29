/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function promptUserForGuess() {
  return new Promise((resolve) => {
    rl.question('Enter your 4-digit number: ', (userInput) => {
      resolve(userInput);
    });
  });
}

async function startGame() {
  try {
    const userInput = await promptUserForGuess();

    if (checkIsValidUserInput(userInput)) {
      const result = getBullsAndCows(userInput, secretNumber);

      console.log(result);
    } else {
      console.log(
        // eslint-disable-next-line max-len
        'Invalid number! Please enter a valid 4-digit number with unique digits.',
      );
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

startGame();
