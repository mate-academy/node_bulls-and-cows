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
  let validNums = '';

  if (userInput.length !== 4 || userInput[0] === '0') {
    return 'You should input 4 digits and first one should not be "0".';
  }

  for (const char of userInput) {
    if (isNaN(char)) {
      return 'Only digits are allowed.';
    }

    if (validNums.includes(char)) {
      return 'All digits should be unique.';
    }

    validNums += char;
  }

  return 'valid';
}

module.exports = {
  checkIsValidUserInput,
};
