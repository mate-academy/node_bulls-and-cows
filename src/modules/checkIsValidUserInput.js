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
  // Check if input is a string
  if (typeof input !== 'string') {
    return false;
  }

  // Check if input has exactly 4 characters
  if (input.length !== 4) {
    return false;
  }

  // Check if the first character is a digit from 1 to 9
  if (input[0] === '0') {
    return false;
  }

  // Check if all characters are digits
  for (let i = 0; i < input.length; i++) {
    if (input[i] < '0' || input[i] > '9') {
      return false;
    }
  }

  // Check for duplicate digits
  const digitSet = new Set();

  for (let i = 0; i < input.length; i++) {
    if (digitSet.has(input[i])) {
      return false;
    }
    digitSet.add(input[i]);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
