/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const rl = readline.createInterface({
  input: process.input,
  output: process.output,
});

rl.question('Input 4-digit number', (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    throw new Error('Invalid input');
  }

  console.log(getBullsAndCows(userInput, generateRandomNumber().toString()));
  rl.close();
});
