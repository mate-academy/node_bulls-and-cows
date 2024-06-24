'use strict';

import readline from 'readline';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput';
import { generateRandomNumber } from './modules/generateRandomNumber';
import { getBullsAndCows } from './modules/getBullsAndCows';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

terminal.question('Enter a 4-digit number to guess: ', (userInput) => {
  if (checkIsValidUserInput(userInput)) {
    getBullsAndCows(+userInput, numberToGuess);
  } else {
    promptUser();
  }

  terminal.close();
});

function promptUser() {
  terminal.question('Enter a 4-digit number to guess: ', (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      getBullsAndCows(+userInput, numberToGuess);
      terminal.close();
    } else {
      promptUser();
    }
  });
}
