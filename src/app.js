/* eslint-disable no-console */
'use strict';

import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const n = generateRandomNumber();

const firstQuestion = `Okay! I'll think of a 4-digit number. Try to guess it!`;
const errorQuestion = `Enter a number of 4 different digits that does not start with 0`;
const continueQuestion = 'Try again';
const winMessage = 'Boom! You got it! Great job!';

function askQuestion(question) {
  rl.question(`${question} `, (input) => {
    const validInput = checkIsValidUserInput(input);

    if (!validInput) {
      askQuestion(errorQuestion);
    }

    if (validInput) {
      const result = getBullsAndCows(input, n);

      if (result.bulls === 4) {
        console.log(result, winMessage);

        rl.close();
      } else {
        console.log(result);
        askQuestion(continueQuestion);
      }
    }
  });
}

askQuestion(firstQuestion);
