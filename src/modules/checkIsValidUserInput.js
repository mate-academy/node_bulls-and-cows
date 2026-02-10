'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'string') {
    return false;
  }

  const input = userInput.trim();

  if (!/^\d{4}$/.test(input)) {
    return false;
  }

  if (input[0] === '0') {
    return false;
  }

  const unique = new Set(input.split(''));

  return unique.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
