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
  const inputSet = new Set(userInput);
  const inputLength = userInput.length;
  const num = Number(userInput);

  if (
    inputSet.size !== 4 ||
    inputLength !== 4 ||
    userInput.at(0) === '0' ||
    Number.isNaN(num)
  ) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
