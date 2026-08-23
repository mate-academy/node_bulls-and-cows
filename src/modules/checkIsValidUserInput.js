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
  /* Write your code here */
  const input = userInput.trim();

  if (input.length !== 4) {
    return false;
  }

  if (new Set(input).size !== 4) {
    return false;
  }

  if (input[0] === '0') {
    return false;
  }

  if (Number.isNaN(Number(input))) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
