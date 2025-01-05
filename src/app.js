'use strict';

// Write your code here
/* eslint-disable no-console */
const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Put your number: ', (userInput) => {
  console.log(checkIsValidUserInput(userInput));

  if (checkIsValidUserInput(userInput)) {
    const numberToGuess = generateRandomNumber();
    const result = getBullsAndCows(userInput, numberToGuess);

    console.log(`Your input: ${+userInput}`);
    console.log(`Number to guess: ${+numberToGuess}`);
    console.log(`Result: ${JSON.stringify(result)}`);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
  rl.close();
});
