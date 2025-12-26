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
  if (!/^\d{4}$/.test(userInput)) {
    return false; // Not a 4-digit number
  }

  if (userInput[0] === '0') {
    return false; // Starts with 0
  }

  if (typeof userInput !== 'string') {
    return false; // Not a string
  }

  if (userInput.length !== 4) {
    return false; // Not 4 characters long
  }

  const digits = userInput.split('');
  const uniqueDigits = new Set(digits);

  if (uniqueDigits.size !== 4) {
    return false; // Contains duplicate digits
  }

  return true; // Valid input
}

module.exports = {
  checkIsValidUserInput,
};
