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
  if (typeof userInput !== 'string') {
    return false;
  }

  if (userInput.length !== 4) {
    return false;
  }

  for (const ch of userInput) {
    if (ch < '0' || ch > '9') {
      return false;
    }
  }

  for (const ch of userInput) {
    if (userInput.indexOf(ch) !== userInput.lastIndexOf(ch)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
