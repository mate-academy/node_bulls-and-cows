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
  const isValidLength = userInput.length === 4;
  const startsWithNonZero = userInput[0] !== '0';
  const hasUniqueDigits = new Set(userInput).size === 4;
  const isNumeric = /^\d+$/.test(userInput);

  return isValidLength && startsWithNonZero && hasUniqueDigits && isNumeric;
}

module.exports = {
  checkIsValidUserInput,
};
