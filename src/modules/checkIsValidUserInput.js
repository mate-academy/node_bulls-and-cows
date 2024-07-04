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
    userInput.length !== 4 ||
    userInput[0] === '0' ||
    isNaN(Number(userInput))
  ) {
    return false;
  }

  const uniqueDigits = new Set(userInput);

  return uniqueDigits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
