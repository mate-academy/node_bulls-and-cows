'use strict';

import readline from 'node:readline';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

function askUser(message) {
  rl.question(`${message}\n> `, (userNumber) => {
    if (!checkIsValidUserInput(userNumber)) {
      askUser('Sorry, but your number is invalid! Let`s try again.');
    }

    const { cows, bulls } = getBullsAndCows(+userNumber, randomNumber);

    if (bulls === 4) {
      rl.close();
      process.stdout.write('Good job! See you later!');
    } else {
      askUser(
        `Your result: ${bulls} bulls and ${cows} cows. Good job and try again!`,
      );
    }
  });
}

askUser('What is your number?');
