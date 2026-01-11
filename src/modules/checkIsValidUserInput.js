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
  const userInputStr = userInput.toString();

  if (userInputStr.length !== 4) {
    return false;
  }

  if (userInputStr[0] === '0') {
    return false;
  }

  const digitsSet = new Set();

  for (const char of userInputStr) {
    if (isNaN(char)) {
      return false;
    }

    if (digitsSet.has(char)) {
      return false;
    }

    digitsSet.add(char);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
