/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const randomNum = require('./randomNum');
const getBullsAndCows = require('./check');
const validator = require('./validinput');

const randomDigits = randomNum();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const request = () => terminal.question(
  'Enter 4 different digits: ', (userInput) => {
    const isValid = validator(userInput);

    if (!isValid) {
      return request();
    }

    const result = getBullsAndCows(userInput, randomDigits);

    if (result === 'bull bull bull bull') {
      console.log('Victory!');

      return terminal.close();
    }

    console.log(`${result}. Try again!`);

    return request();
  });

request();
