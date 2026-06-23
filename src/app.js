'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Generating random number from random number?', (userInput) => {
  checkIsValidUserInput(userInput);
  getBullsAndCows(userInput, generateRandomNumber());
});
