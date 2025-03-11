'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const digitsToGuess = generateRandomNumber();

terminal.question('Enter 4 digit number: ', (inputNumber) => {
  if (checkIsValidUserInput(inputNumber)) {
    getBullsAndCows(+inputNumber, digitsToGuess);
  } else {
    throw new Error('Please chek game rules');
  }

  terminal.close();
});
