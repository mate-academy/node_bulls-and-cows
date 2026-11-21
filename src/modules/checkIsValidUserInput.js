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
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const is4Digits = userInput.length === 4;
  const doesNotStartWith0 = userInput[0] !== '0';
  const hasNoDuplicates = new Set(userInput).size === 4;
  const isAllNumeric = userInput
    .split('')
    .every((char) => digits.includes(char));

  return is4Digits && doesNotStartWith0 && hasNoDuplicates && isAllNumeric;
}

module.exports = {
  checkIsValidUserInput,
};
