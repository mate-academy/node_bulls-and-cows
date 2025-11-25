/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const secret = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askGuess() {
  terminal.question('Try to guess a number (****): ', (number) => {
    const isValid = checkIsValidUserInput(number);

    // FIX: now check for false, not "error"
    if (!isValid) {
      console.log(
        'Invalid input — enter a 4-digit number, no duplicates, no leading 0.',
      );

      return askGuess();
    }

    // FIX: correct order: secret first, guess second
    const { bulls, cows } = getBullsAndCows(secret, number);

    console.log(`cows: ${cows}, bulls: ${bulls}`);

    if (bulls === 4) {
      console.log('You win!');
      terminal.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
