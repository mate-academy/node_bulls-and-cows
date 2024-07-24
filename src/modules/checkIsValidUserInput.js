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
  if (userInput.length !== 4) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  const set = new Set();

  for (const num of userInput) {
    if (isNaN(num)) {
      return false;
    }

    if (set.has(num)) {
      return false;
    }
    set.add(num);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
