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
  if (typeof userInput !== 'string' || userInput.length !== 4) {
    return false;
  }

  if (!/^[1-9]\d{3}$/.test(userInput)) {
    return false;
  }

  const validValue = new Set(userInput);

  return validValue.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
