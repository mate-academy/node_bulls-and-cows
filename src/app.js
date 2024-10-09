'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

const guessFn = () => {
  terminal.question('Guess a 4 different digits number: ', (userNumber) => {
    // console.log(randomNumber);

    if (!checkIsValidUserInput(userNumber)) {
      throw new Error('Not a valid number');
    }
    getBullsAndCows(userNumber, randomNumber);

    if (userNumber === randomNumber.toString()) {
      // eslint-disable-next-line no-console
      console.log(`You guessed it RIGHT! The number was: '${randomNumber}'`);
      terminal.close();
    }
    guessFn();
  });
};

guessFn();
