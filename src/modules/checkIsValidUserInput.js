'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput
 * @return {boolean}
 */
function checkIsValidUserInput(userInput) {
  if (userInput.length !== 4) {
    return false;
  }

  const numbers = userInput.split('');

  if (!numbers.every((num) => /^\d$/.test(num))) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  const uniqueNumber = new Set(numbers);

  return uniqueNumber.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
