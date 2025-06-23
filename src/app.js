'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

rl.question('Enter nums ', (nums) => {
  if (checkIsValidUserInput(nums)) {
    // eslint-disable-next-line no-console
    console.log(getBullsAndCows(nums, randomNumber));
  } else {
    throw new Error('Invalid input');
  }
  rl.close();
});
