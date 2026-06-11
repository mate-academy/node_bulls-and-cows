/* eslint-disable no-console */
'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  const isValidFormat = /^[1-9]\d{3}$/.test(userInput);
  const hasUniqueDigits = new Set(userInput).size === 4;

  return isValidFormat && hasUniqueDigits;
}

module.exports = {
  checkIsValidUserInput,
};
