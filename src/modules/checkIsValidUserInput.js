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
  let isValid = true;

  let validNums = '';

  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  for (const char of userInput) {
    if (isNaN(char)) {
      isValid = false;
    }

    if (validNums.includes(char)) {
      return false;
    }

    validNums += char;
  }

  return isValid;
}

module.exports = {
  checkIsValidUserInput,
};
