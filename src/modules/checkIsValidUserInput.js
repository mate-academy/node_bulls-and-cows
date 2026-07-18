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
  const isValidLength = userInput.length === 4;
  const isNotStartingWithZero = userInput[0] !== '0';
  const hasNoDuplicateDigits = new Set(userInput).size === userInput.length;
  const isOnlyDigits = /^\d+$/.test(userInput);

  return (
    isValidLength &&
    isNotStartingWithZero &&
    hasNoDuplicateDigits &&
    isOnlyDigits
  );
}

module.exports = {
  checkIsValidUserInput,
};
