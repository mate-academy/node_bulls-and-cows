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
  const digits = userInput.split('').map(Number);

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  if (digits.length === 4
    && digits[0] !== 0
    && new Set(digits).size === 4
  ) {
    return true;
  }

  return false;
}

module.exports = {
  checkIsValidUserInput,
};
