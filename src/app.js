/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function tryGuess() {
  terminal.question('Enter a 4-digit number: ', (userInput) => {
    const trimmedInput = userInput.trim();
    const { isValid, errorMessage } = checkIsValidUserInput(trimmedInput);

    if (isValid) {
      if (Number(trimmedInput) === Number(randomNumber)) {
        console.log('Congratulations! You guessed the number.');

        terminal.close();

        return;
      } else {
        const result = getBullsAndCows(trimmedInput, randomNumber);

        console.log(`Result: \nbulls: ${result.bulls} \ncows: ${result.cows}`);
      }
    } else {
      console.log(errorMessage || 'Error');
    }

    return tryGuess();
  });
}

tryGuess();
