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
  switch (true) {
    case userInput[0] === '0':
      return false;

    case isNaN(+userInput):
      return false;

    case new Set(userInput.split('')).size !== 4:
      return false;

    default:
      return true;
  }
}

module.exports = {
  checkIsValidUserInput,
};
