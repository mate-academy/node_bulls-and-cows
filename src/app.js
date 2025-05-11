/* eslint-disable no-console */
'use strict';

import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const terminal = readline.createInterface(process.stdin, process.stdout);

const firstQuestion = 'Try to guess 4-digit number that I am thinking of  ';
const errorQuestion =
  'The number must be 4-digit, does not start with 0 and have unique digits  ';
const continueMessage = 'Try one more guess!  ';
const endMessage = 'Congrats!!! You guessed it!!!';

const secretNum = generateRandomNumber();

const askQuestion = (question) => {
  terminal.question(`${question}`, (input) => {
    const isInputValid = checkIsValidUserInput(input);

    if (!isInputValid) {
      askQuestion(errorQuestion);
    } else {
      const result = getBullsAndCows(input, secretNum);

      if (result.bulls === 4) {
        console.log(endMessage, `The number was ${secretNum}`);
        terminal.close();
      } else {
        console.log(result);
        askQuestion(continueMessage);
      }
    }
  });
};

askQuestion(firstQuestion);
