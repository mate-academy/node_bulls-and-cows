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
  const userInputString = userInput.toString();

  if (isNaN(userInput)
    || userInput < 0
    || userInputString.length !== 4
    || userInputString[0] === '0'
    || hasDuplicates(userInputString)) {
    return false;
  }

  return true;
}

function hasDuplicates(str) {
  return new Set(str).size !== str.length;
}

module.exports = {
  checkIsValidUserInput,
};
