'use strict';

// Write your code here
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

module.exports = {
  numberToGuess,
  checkIsValidUserInput,
  getBullsAndCows,
};
