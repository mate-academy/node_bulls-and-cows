'use strict';
import readline from 'node:readline';

const generateRandomNumber = require('./modules/generateRandomNumber');
const checkIsValidUserInput = require('./modules/checkIsValidUserInput');
const getBullsAndCows = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainNumber = generateRandomNumber();

function askGuess() {
  rl.question('The number is ready, can you guess? ', (input) => {
    if (checkIsValidUserInput(input)) {
      const result = getBullsAndCows(+input, mainNumber);

      if (result.bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congrats! You have won!');
        rl.close();
      } else {
        askGuess();
      }
    } else {
      askGuess();
    }
  });
}

askGuess();
