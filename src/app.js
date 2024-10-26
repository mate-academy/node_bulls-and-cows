/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface(process.stdin, process.stdout);

terminal.question('Enter your 4-digit number please - ', (number) => {
  if (checkIsValidUserInput(number)) {
    const randomNumber = generateRandomNumber();

    if (+number === randomNumber) {
      console.log('Congratulation you are a winner');
      terminal.close();
    } else {
      const result = getBullsAndCows(number, randomNumber);

      console.log(`Your result ${result}`);
    }
  } else {
    console.log('Select unique non-repeating digits please - ');
  }
});
