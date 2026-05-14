/* eslint-disable */
'use strict';
import readline from 'readline/promises';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();
console.log(randomNumber);

const userAnswer = await terminal.question(
  'Write your 4 digit unique number: ',
);

if (!checkIsValidUserInput(userAnswer)) {
  console.log('Please, enter valid 4 digit unique number');
}

if (checkIsValidUserInput(userAnswer)) {
  const { bulls, cows } = getBullsAndCows(userAnswer, randomNumber);

  if (bulls === 4) {
    terminal.close();
    console.log('You win!');
  }

  console.log(`bulls - ${bulls}, cows - ${cows}`);
}
