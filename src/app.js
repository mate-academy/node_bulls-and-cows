'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const secretWord = generateRandomNumber();

rl.prompt();
// eslint-disable-next-line no-console
console.log('Enter 4-digit number with unique digits: ');

rl.on('line', (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    // eslint-disable-next-line no-console
    console.log('Error');
    rl.prompt();

    return;
  }

  const result = getBullsAndCows(userInput, secretWord);

  if (result.bulls === 4) {
    // eslint-disable-next-line no-console
    console.log('You won');

    rl.close();

    return;
  }

  // eslint-disable-next-line no-console
  console.log(`${result.bulls} bulls, ${result.cows} cows`);
  rl.prompt();
});
