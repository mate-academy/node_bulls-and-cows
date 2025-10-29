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
  const maxUserInputLength = 4;
  const availableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (typeof userInput !== 'string') {
    return false;
  }

  const uniqueUserInput = new Set(userInput);

  if (uniqueUserInput.size !== maxUserInputLength) {
    return false;
  }

  if (userInput.startsWith('0')) {
    return false;
  }

  if (
    userInput.split('').some((a) => !availableDigits.includes(parseInt(a, 10)))
  ) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
