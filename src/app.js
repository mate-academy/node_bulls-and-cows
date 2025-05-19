/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
'use strict';
import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();
console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

function game() {
  readLine.question('Enter your guess ', (userGuess) => {
    if (!checkIsValidUserInput(userGuess)) {
      console.log(
        // eslint-disable-next-line max-len
        'Invalid input! Please enter a 4-digit number with unique digits, not starting with 0.',
      );

      game();

      return;
    }

    const guess = Number(userGuess);
    const { bulls, cows } = getBullsAndCows(guess, randomNumber);
    console.log(`Result: ${bulls} bulls, ${cows} cows`);

    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      readLine.close();
    } else {
      game();
    }
  });
}

game();
