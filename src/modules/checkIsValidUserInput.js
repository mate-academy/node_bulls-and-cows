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
  if (Number.isNaN(+userInput)) {
    return false;
  }

  const digit = userInput.split('');

  if (digit.length !== 4) {
    return false;
  }

  if (digit[0] === '0') {
    return false;
  }

  for (let i = 0; i < digit.length - 1; i++) {
    for (let j = i + 1; j < digit.length; j++) {
      if (digit[i] === digit[j]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
