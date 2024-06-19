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
  if (
    typeof userInput !== 'string' ||
    userInput.length !== 4 ||
    userInput[0] === '0'
  ) {
    return false;
  }

  const digitSet = new Set();

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] < '0' || userInput[i] > '9') {
      return false;
    }

    if (digitSet.has(userInput[i])) {
      return false;
    }
    digitSet.add(userInput[i]);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
