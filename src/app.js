/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const generateRandomDigits = require('./generateRandomDigits');
const getBullsAndCows = require('./getBullsAndCows');
const validator = require('./validateInput');

const randomDigits = generateRandomDigits();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const request = () => terminal.question(
  'Enter 4 different digits, please: ', (userInput) => {
    const isValid = validator(userInput);

    if (!isValid) {
      return request();
    }

    const { bulls, cows } = getBullsAndCows(userInput, randomDigits);

    if (bulls === 4) {
      console.log('You won!');

      return terminal.close();
    }

    console.log(`${bulls} bulls and ${cows} cows. Try again!`);

    return request();
  });

request();
