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
  if (userInput.length !== 4 || Number(userInput[0]) === 0) {
    return false;
  }

  const value = userInput.split('');

  for (const item of value) {
    if (!Number.isInteger(Number(item))) {
      return false;
    }
  }

  const uniq = new Set(value);

  return uniq.size === value.length;
}

module.exports = {
  checkIsValidUserInput,
};
