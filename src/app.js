'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

function ask() {
  rl.question('What are your 4 digits?', (digits) => {
    const trimedDigits = digits.trim();
    const digitsValid = checkIsValidUserInput(trimedDigits);
    const { bulls, cows } = getBullsAndCows(trimedDigits, randomNumber);

    if (!digitsValid) {
      // eslint-disable-next-line no-console
      console.log('Digits are not valid');
      ask();
    } else if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log(`Your guess is correct: ${trimedDigits}`);
      rl.close();
    } else {
      // eslint-disable-next-line no-console
      console.log(`Your guess: ${trimedDigits}`);
      // eslint-disable-next-line no-console
      console.log(`Result: ${bulls} bulls, ${cows} cows`);
      ask();
    }
  });
}

ask();
