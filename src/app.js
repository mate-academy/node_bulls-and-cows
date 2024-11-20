'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const numberToGuess = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(message) {
  terminal.question(message, (numberFromUser) => {
    const validInput = checkIsValidUserInput(numberFromUser);

    if (!validInput) {
      return question(
        'You should input 4 digits, first one should not be "0", all unique.',
      );
    }

    const result = getBullsAndCows(Number(numberFromUser), numberToGuess);

    if (result.bulls !== 4) {
      return question(JSON.stringify(result));
    }

    terminal.close();

    return JSON.stringify(result);
  });
}

question('Guess the number?');
