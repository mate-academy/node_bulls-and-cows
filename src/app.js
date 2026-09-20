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

const randomNumber = generateRandomNumber();

const question = () =>
  rl.question('Enter a 4-digit number: ', (userInput) => {
    const isValid = checkIsValidUserInput(userInput);

    if (!isValid) {
      console.log('Invalid input. Please enter a valid 4-digit number.');

      question();
    } else {
      const bullsAndCows = getBullsAndCows(userInput, randomNumber);

      if (bullsAndCows.bulls === 4) {
        console.log('Congratulations! You guessed the number correctly.');
        rl.close();
      } else {
        console.log('Try again!');
        console.log(`Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}`);

        question();
      }
    }
  });

question();
