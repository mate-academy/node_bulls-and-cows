'use strict';

// Write your code here
const readline = require('node:readline');
const { generateRandomNumber } = require('../src/modules/generateRandomNumber');
const {
  checkIsValidUserInput,
} = require('../src/modules/checkIsValidUserInput');
const { getBullsAndCows } = require('../src/modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedNumber = generateRandomNumber();

rl.question('Enter your number: ', (userInput) => {
  if (checkIsValidUserInput(userInput)) {
    // eslint-disable-next-line no-console
    console.log(getBullsAndCows(userInput, generatedNumber));
  } else {
    // eslint-disable-next-line no-console
    console.log(`Your number is not valid`);
  }
  rl.close();
});
