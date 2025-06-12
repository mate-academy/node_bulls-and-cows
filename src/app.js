'use strict';
import readline from 'readline';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const terminal = readline.createInterface(process.stdin, process.stdout);

function app(userInput) {
  const numberToGuess = generateRandomNumber();
  const inputStr = String(userInput);

  if (!checkIsValidUserInput(inputStr)) {
    return false;
  }

  const result = getBullsAndCows(userInput, numberToGuess);

  return result;
}

terminal.question('Write your 4-digit number: ', (number) => {
  terminal.close();
  app(number);
});
