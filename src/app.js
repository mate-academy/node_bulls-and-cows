/* eslint-disable no-console */
'use strict';

// Write your code here
// import readline from 'readline';
const { readline } = require('readline');
// import generateRandomNumber from './modules/generateRandomNumber.js';
// import checkIsValidUserInput from './modules/checkIsValidUserInput.js';
// import getBullsAndCows from './modules/getBullsAndCows.js';

const {
  generateRandomNumber,
} = require('/src/modules/generateRandomNumber.mjs');
const {
  checkIsValidUserInput,
} = require('/src/modules/checkIsValidUserInput.mjs');
const { getBullsAndCows } = require('./modules/getBullsAndCows.mjs');
const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function promptUserForGuess() {
  return new Promise((resolve, reject) => {
    terminal.question('Enter your 4-digit number: ', (userInput) => {
      resolve(userInput);
      reject(new Error('Some error'));
    });
  });
}

async function go() {
  try {
    const userInput = await promptUserForGuess();

    if (checkIsValidUserInput(userInput)) {
      const result = getBullsAndCows(userInput, randomNumber);

      console.log(result, randomNumber);
    } else {
      console.log(
        // eslint-disable-next-line max-len
        'Invalid number! Please enter a valid 4-digit number with unique digits.',
      );
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    terminal.close();
  }
}

go();
