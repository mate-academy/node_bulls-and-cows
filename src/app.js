'use strict';

const readline = require('readline');
const BullsAndCows = require('./modules/getBullsAndCows');
const isValidInput = require('./modules/checkIsValidUserInput');
const randomNumber = require('./modules/generateRandomNumber');

// Write your code here
// const userInput = process.argv[2];
const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

const randomGeneration = randomNumber.generateRandomNumber();

terminal.question('Guess a four-digit number.', (response) => {
  if (isValidInput.checkIsValidUserInput(response)) {
    console.log(BullsAndCows.getBullsAndCows(randomGeneration, response));
    console.log(`it was ${randomGeneration}`);
  } else {
    console.log(
      'Wrong input: Valid user input is a 4 - digit number'
      + ' that does not start with 0'
      + ' and does not contain any duplicate digits.'
    );
  }
  terminal.close();
});
