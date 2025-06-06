'use strict';
/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

function checkIsValidUserInput(input) {
  // Check if input is a string of exactly 4 digits
  if (!/^\d{4}$/.test(input)) {
    return false;
  }

  // Check if input starts with '0'
  if (input[0] === '0') {
    return false;
  }

  // Check for duplicate digits
  const digits = new Set(input);

  if (digits.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
