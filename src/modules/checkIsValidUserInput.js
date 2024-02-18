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
  const lengthAndDigitsCheck = /^(\d{4})$/.test(userInput);
  const startWithoutZero = userInput[0] !== '0';
  const nonDuplicates = new Set(userInput).size === 4;

  return lengthAndDigitsCheck && startWithoutZero && nonDuplicates;
}

module.exports = {
  checkIsValidUserInput,
};
