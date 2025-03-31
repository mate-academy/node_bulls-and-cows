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
  const sUserInput = userInput.toString();

  if (sUserInput[0] === '0') {
    return false;
  }

  if (sUserInput.length !== 4) {
    return false;
  }

  for (let i = 0; i < 4; i++) {
    const n = sUserInput[i];

    if (isNaN(+n)) {
      return false;
    }

    if (sUserInput.indexOf(n, i + 1) > 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
