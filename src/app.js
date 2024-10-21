/* eslint-disable no-console */
'use strict';

import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput';
import { getBullsAndCows } from './modules/getBullsAndCows';

const terminal = readline.createInterface(process.stdin, process.stdout);

const numberToGuess = generateRandomNumber();

terminal.question('Guess the number', (userNumber) => {
  if (!checkIsValidUserInput(userNumber)) {
    console.log('Input is not a valid 4-digit number');
  }

  if (userNumber === numberToGuess) {
    console.log('You guessed the number!');
    terminal.close();
  } else {
    console.log(getBullsAndCows(userNumber, numberToGuess));
  }
});
