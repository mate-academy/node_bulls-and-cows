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
  const userNumber = userInput.trim();

  if (userNumber.length !== 4) {
    return false;
  }

  if (isNaN(+userNumber)) {
    return false;
  }

  if (userNumber.startsWith('0')) {
    return false;
  }

  if (new Set(userNumber.split('')).size !== userNumber.length) {
    return false;
  }

  return true;
}

module.exports = { checkIsValidUserInput };
