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
  const digitSet = new Set(userInput);

  if (digitSet.size !== 4) {
    return false;
  }

  if (isNaN(Number(userInput))) {
    return false;
  }

  if (Number(userInput[0]) === 0) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
