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
  const set = new Set(userInput);

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  return set.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
