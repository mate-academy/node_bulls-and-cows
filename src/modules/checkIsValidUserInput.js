/* eslint-disable no-console */
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
  const setUserInput = new Set(userInput);

  if (isNaN(userInput) || userInput[0] === '0' || setUserInput.size !== 4) {
    if (isNaN(userInput)) {
      console.error('User input is not a number');
    }

    if (userInput[0] === '0') {
      console.error('User input cannot start with 0');
    }

    if (setUserInput.size !== 4) {
      console.error('User input must contain 4 unique digits');
    }

    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
