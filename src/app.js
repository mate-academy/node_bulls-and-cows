/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedDigits = generateRandomNumber();
let firstQuestion = false;

function askUser() {
  terminal.question(
    `${firstQuestion ? `Try again ` : `I've chosen a number of 4 different digits. Try to guess it: `}`,
    (digits) => {
      if (!checkIsValidUserInput(digits)) {
        return false;
      }

      firstQuestion = true;

      const { bulls, cows } = getBullsAndCows(digits, generatedDigits);

      console.log(
        `Your result: ${bulls > 0 ? `${bulls > 1 ? `${bulls} bulls` : `${bulls} bull`}` : ''}${bulls > 0 && cows > 0 ? ` and ` : ``}${cows > 0 ? `${cows > 1 ? `${cows} cows` : `${cows} cow`}` : ''}`,
      );

      if (bulls === 4) {
        console.log('Congratulations. You guessed it.');
        terminal.close();
      } else {
        askUser();
      }
    },
  );
}

askUser();
