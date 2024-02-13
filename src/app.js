/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Your number: ', (userInput) => {
  const generatedNumber = generateRandomNumber();

  console.log(`Program generate: ${generatedNumber}\n`);

  if (checkIsValidUserInput(userInput)) {
    console.log(getBullsAndCows(userInput, generatedNumber));
  } else {
    console.log('Invalid value');
  }

  terminal.close();
});
