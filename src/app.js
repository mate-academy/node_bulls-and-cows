/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

terminal.question('Please quess the number', (number) => {
  const randomNum = generateRandomNumber();

  if (!checkIsValidUserInput(number)) {
    console.log('your input do not valid');
    terminal.close();
  }

  console.log(getBullsAndCows(number, randomNum));

  terminal.close();
});
