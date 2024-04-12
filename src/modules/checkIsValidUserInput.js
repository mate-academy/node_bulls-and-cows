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
  if (isNaN(userInput)) {
    return false;
  }

  if (userInput < 1000 || userInput > 9999) {
    return false;
  }

  const digits = userInput.split('');

  if (digits[0] === '0') {
    return false;
  }
  digits.sort();

  for (let i = 1; i < digits.length - 1; i++) {
    if (digits[i - 1] === digits[i]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
