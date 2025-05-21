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
  const numberSet = new Set(userInput.toString());

  if (
    Number.isNaN(number) ||
    number < 1000 ||
    number > 9999 ||
    numberSet.size !== 4
  ) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
