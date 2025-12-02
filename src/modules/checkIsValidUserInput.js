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
  const isFourDigits =
    typeof userInput === 'string' &&
    userInput.length === 4 &&
    userInput[0] !== '0' &&
    [...userInput].every((ch) => ch >= '0' && ch <= '9');

  const digits = userInput.split('');
  const hasNoDuplicates = new Set(digits).size === digits.length;

  return isFourDigits && hasNoDuplicates;
}

module.exports = {
  checkIsValidUserInput,
};
