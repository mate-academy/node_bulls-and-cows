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
  const testInput = new Set(userInput);
  const regex = /^[1-9]\d{3}$/;

  if (testInput.size !== userInput.length || !regex.test(userInput)) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
