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
  const digits = userInput.split('');

  if (digits.length !== 4) {
    return false;
  }

  if (digits[0] === '0') {
    return false;
  }

  const isNotValid = digits
    .some((number, index) => digits
      .lastIndexOf(number) !== index
      || isNaN(number));

  if (isNotValid) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
