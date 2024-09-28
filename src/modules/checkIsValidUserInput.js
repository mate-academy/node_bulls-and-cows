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

  if (userInput.length !== 4 || Number(userInput[0]) === 0) {
    return false;
  }

  const amount = {};

  for (let i = 0; i < userInput.length; i++) {
    if (isNaN(Number(userInput[i]))) {
      return false;
    }

    if (!amount[userInput[i]]) {
      amount[userInput[i]] = 1;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
