/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
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
  const inputSet = new Set(userInput);

  if (isNaN(Number(userInput)) || userInput.length !== 4) {
    return false;
  }

  if (Number(userInput[0]) === 0) {
    return false;
  }

  if (inputSet.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
