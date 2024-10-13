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
  const trimmedInput = userInput.trim();

  if (trimmedInput.length !== 4) {
    return false;
  }

  if (trimmedInput[0] === '0') {
    return false;
  }

  if (!/^\d+$/.test(trimmedInput)) {
    return false;
  }

  const digitsSet = new Set(trimmedInput);

  if (digitsSet.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
