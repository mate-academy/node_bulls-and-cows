'use strict';

/* eslint-disable no-console */

const readline = require('readline');
const { stdin, stdout } = require('process');
const { generateRandomNumber } = require('./generateRandomNumber');
const { countCowsAndBulls } = require('./count');
const { validateInput } = require('./validate');

const terminal = readline.createInterface({
  input: stdin,
  output: stdout,
});
const numberToGuess = generateRandomNumber();
const requiredLength = 4;

function askUser() {
  terminal.question('Your guess: ', (userGuess) => {
    if (!validateInput(userGuess, requiredLength)) {
      return askUser();
    }

    const result = countCowsAndBulls(numberToGuess, userGuess);

    return result ? terminal.close() : askUser();
  });
};

console.log('numberToGuess: ', numberToGuess);
askUser();
