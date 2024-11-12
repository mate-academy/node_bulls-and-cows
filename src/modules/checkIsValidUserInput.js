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
  if (userInput.startsWith('0')) {
    return false;
  }

  if (userInput.length !== 4) {
    return false;
  }

  if (Number.isNaN(Number(userInput))) {
    return false;
  }

  for (let i = 0; i < 3; i++) {
    if (userInput.includes(userInput[i], i + 1)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
