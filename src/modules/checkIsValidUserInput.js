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
  const isNumber = !isNaN(+userInput);
  const hasZeroValue = String(+userInput).length < 4;
  const hasFourChars = userInput.length === 4;

  let hasUniqDigits = true;

  for (let i = 0; i < 4; i++) {
    if (userInput.lastIndexOf(userInput[i]) !== i) {
      hasUniqDigits = false;
      break;
    }
  }

  return isNumber && !hasZeroValue && hasFourChars && hasUniqDigits;
}

module.exports = {
  checkIsValidUserInput,
};
