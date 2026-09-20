/* eslint-disable no-console */
'use strict';

// Write your code here
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rundomNumber = generateRandomNumber();

rl.question('Enter a 4-digit number: ', (userInput) => {
  checkIsValidUserInput(userInput);
  getBullsAndCows(userInput, rundomNumber);

  rl.close();
});
