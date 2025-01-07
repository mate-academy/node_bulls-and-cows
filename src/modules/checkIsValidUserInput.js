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
  if (isNaN(+userInput) || userInput.length > 4 || userInput.startsWith('0')) {
    return false;
  }

  const numbers = new Set(userInput);

  return numbers.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
