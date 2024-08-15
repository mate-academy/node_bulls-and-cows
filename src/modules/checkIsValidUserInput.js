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
  const number = Number(userInput);

  const valid = userInput.split('')[0] === '0';
  const digits = userInput.split('');

  const uniqueNumber = new Set(digits).size === digits.length;

  if (
    !(Number.isInteger(number) && userInput.length === 4) ||
    valid === true ||
    !uniqueNumber
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  checkIsValidUserInput,
};
