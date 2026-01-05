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
  // Check if input is exactly 4 characters
  if (!userInput || userInput.length !== 4) {
    return false;
  }

  // Check if all characters are digits
  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  // Check if it starts with 0
  if (userInput[0] === '0') {
    return false;
  }

  // Check for duplicate digits
  const digits = new Set(userInput);

  if (digits.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
