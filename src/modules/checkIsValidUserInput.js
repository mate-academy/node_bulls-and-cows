'use strict';

const { numberToGuessLength } = require('../constants');
const { hasDifferentDigits } = require('./hasDifferentDigits');

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (!userInput || !(+userInput)) {
    return false;
  }

  const userInputNumber = +userInput;

  const hasEnoughLength = userInputNumber
    .toString().length === numberToGuessLength;

  const numberHasDifferentDigits = hasDifferentDigits(userInputNumber);

  return userInputNumber && hasEnoughLength && numberHasDifferentDigits;
}

module.exports = {
  checkIsValidUserInput,
};
