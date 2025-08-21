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
    !/^\d+$/.test(userInput)
  ) {
    return false;
  }

  const digits = new Set();

  for (const digit of userInput) {
    if (digits.has(digit)) {
      return false;
    }
    digits.add(digit);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
