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
  const hasValidLength = userInput.length === 4;
  const isNumeric = !isNaN(userInput);
  const doesNotStartWithZero = userInput.at(0) !== '0';

  const digits = userInput.split('');
  const hasNoDuplicates = new Set(digits).size === digits.length;

  if (hasValidLength && isNumeric && doesNotStartWithZero && hasNoDuplicates) {
    return true;
  }

  return false;
}

module.exports = {
  checkIsValidUserInput,
};
