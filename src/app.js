'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function tryGuess() {
  terminal.question('Enter a 4-digit number: ', (userInput) => {
    const userNumber = Number(userInput.trim());
    const isValid = checkIsValidUserInput(userNumber);

    if (isValid) {
      if (userNumber === randomNumber) {
        // eslint-disable-next-line no-console
        console.log('Congratulations! You guessed the number.');

        terminal.close();

        return;
      } else {
        const result = getBullsAndCows(userNumber, randomNumber);

        // eslint-disable-next-line no-console
        console.log(`Result: \nbulls: ${result.bulls} \ncows: ${result.cows}`);
      }
    }

    return tryGuess();
  });
}

tryGuess();
