'use strict';

const readline = require('readline');
const { getFourRandomDigits } = require('./RandomNumGenerator.js');
const { countBullsAndCows } = require('./CountBullsAndCows');

const randomNumber = getFourRandomDigits();
const myInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

myInterface.question(
  'try to guess the 4 digit number ',
  (answer) => {
    // eslint-disable-next-line no-console
    console.log(countBullsAndCows(randomNumber, answer));
    process.exit();
  });
