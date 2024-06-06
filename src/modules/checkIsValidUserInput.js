'use strict';

const VALID_LENGTH = 4;

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  const inputArr = userInput.split('');

  return (
    !isNaN(userInput) &&
    inputArr.length === VALID_LENGTH &&
    inputArr[0] !== '0' &&
    new Set(inputArr).size === VALID_LENGTH
  );
}

module.exports = {
  checkIsValidUserInput,
  VALID_LENGTH,
};
