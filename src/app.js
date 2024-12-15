'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();
const userInput = +process.argv.slice(2)[0];

if (checkIsValidUserInput(userInput)) {
  getBullsAndCows(userInput, numberToGuess);
}
