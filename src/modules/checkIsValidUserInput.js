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
  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  for (let i = 0; i < userInput.length; i++) {
    if (isNaN(userInput[i])) {
      return false;
    }

    for (let j = i + 1; j < userInput.length; j++) {
      if (userInput[i] === userInput[j]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
