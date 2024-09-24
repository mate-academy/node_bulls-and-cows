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
  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  const numbers = '0123456789';

  for (const ch of userInput) {
    if (!numbers.includes(ch)) {
      return false;
    }
  }

  for (const n of numbers) {
    if (userInput.indexOf(n) !== userInput.lastIndexOf(n)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
