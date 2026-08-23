'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

rl.question('Enter your 4-digit number here! ', (guessNumber) => {
  if (checkIsValidUserInput(guessNumber)) {
    const result = getBullsAndCows(guessNumber, numberToGuess);

    rl.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);
  }
  rl.close();
});
