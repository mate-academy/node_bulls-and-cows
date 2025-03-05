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
    Number(userInput[0]) === 0 ||
    userInput.length !== 4 ||
    userInput
      .split('')
      .map(Number)
      .sort((a, b) => a - b)
      .find((equal, index) => equal === Number(userInput[index + 1]))
  ) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
