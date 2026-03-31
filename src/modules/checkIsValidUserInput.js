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

  if (userInput[0] === '0') {
    return false;
  }

  const digits = new Set();

  for (const char of userInput) {
    if (!/^\d$/.test(char)) {
      return false;
    }

    if (digits.has(char)) {
      return false;
    }
    digits.add(char);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
