'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateNumber = generateRandomNumber();

function question() {
  terminal.question(
    'What four-digit **** number did i guess?',
    (inputNumber) => {
      if (!checkIsValidUserInput(inputNumber)) {
        process.stdout.write('try again invalid input\n');

        return question();
      }

      if (+generateNumber === +inputNumber) {
        process.stdout.write('🎉 Congratulations, you are the Winner!!!\n');

        // eslint-disable-next-line comma-dangle, prettier/prettier
        return terminal.close();
      }

      const result = getBullsAndCows(inputNumber, generateNumber);

      process.stdout.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);

      return question();
    },
  );
}
question();
