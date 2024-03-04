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
  const uniqueNumbers = new Set(userInput);

  if (
    !isNaN(+userInput)
    && userInput.length === 4
    && uniqueNumbers.size === 4
    && userInput[0] !== '0'
  ) {
    return true;
  }

  return false;
}

module.exports = {
  checkIsValidUserInput,
};
