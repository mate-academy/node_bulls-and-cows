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
  /* Write your code here */

  const userValue = userInput.split('');

  if (userInput < 1000 || userInput > 9999 || Number.isNaN(Number(userInput))) {
    return false;
  }

  const result = userValue
    .sort((a, b) => a - b)
    .map((val, idx) => {
      if (val === userValue[idx + 1]) {
        return false;
      }

      return true;
    })
    .some((val) => val === false);

  return !result;
}

module.exports = {
  checkIsValidUserInput,
};
