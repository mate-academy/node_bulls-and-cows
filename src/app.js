'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();
const userInput = process.argv.slice(2).join('');

// eslint-disable-next-line no-console
console.log(userInput);

if (checkIsValidUserInput(userInput)) {
  getBullsAndCows(userInput, numberToGuess);
}
