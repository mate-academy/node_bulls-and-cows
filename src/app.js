/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./generateRandomNumber.js');
const { calculateBullsAndCows } = require('./calculateBullsAndCows.js');
const { getInput } = require('./getInput.js');

(async() => {
  const currentNumber = generateRandomNumber();

  while (true) {
    const userInput = await getInput();

    if (userInput.length !== 4) {
      console.log('The number must consist of 4 characters');
    }

    const result = calculateBullsAndCows(currentNumber, userInput);

    console.log(`Result: Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number.');

      readline.close();
    }
  }
})();
