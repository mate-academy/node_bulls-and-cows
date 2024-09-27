/* eslint-disable no-console */
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

  if (userInput.length !== 4) {
    return false;
  }

  if (isNaN(+userInput)) {
    return false;
  }

  if (+userInput < 1000) {
    return false;
  }

  if (uniqueNumbers.size !== userInput.length) {
    return false;
  }

  return true;
}

module.exports = { checkIsValidUserInput };
