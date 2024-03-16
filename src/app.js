/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Guess a number of 4 digits ', (enteredValue) => {
  const generetedNumber = generateRandomNumber();
  const isValid = checkIsValidUserInput(enteredValue);

  if (isValid) {
    const result = getBullsAndCows(enteredValue, generetedNumber);

    console.log(
      'generated number was:',
      generetedNumber,
      'your result:',
      JSON.stringify(result),
    );

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number!');
    } else {
      console.log('Try again!');
    }
  } else {
    console.log('Invalid input. Please enter a valid 4-digit number.');
  }

  terminal.close();
});
