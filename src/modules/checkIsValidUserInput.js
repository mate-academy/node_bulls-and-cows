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
  if (new Set(userInput).size !== 4 || userInput.startsWith('0')) {
    return false;
  }

  const digits = '0123456789';

  for (const ch of userInput) {
    if (!digits.includes(ch)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
