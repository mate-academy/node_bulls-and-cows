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
  if (!isFinite(userInput) || userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  for (const num of userInput) {
    const index = userInput.indexOf(num);
    const lastIndex = userInput.lastIndexOf(num);

    if (index !== lastIndex) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
