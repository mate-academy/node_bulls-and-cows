/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const randomNumber = require('./randomNumber');
const getBullsAndCows = require('./checker');
const validator = require('./validateInput');

const randomDigits = randomNumber();

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

    const result = getBullsAndCows(userInput, randomDigits);

    if (result === 'bull bull bull bull') {
      console.log('You won!');

      return terminal.close();
    }

    console.log(`${result}. Try again!`);

    return request();
  });

request();
