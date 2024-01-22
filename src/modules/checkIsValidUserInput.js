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
  const inputLength = userInput.length;
  const numericInput = userInput;
  const isNumeric = !isNaN(numericInput);
  const isInRange = numericInput >= 1000;
  const uniqueDigits = new Set(userInput);

  const isValid = uniqueDigits.size === inputLength
  && isNumeric
  && isInRange
  && inputLength === 4;

  return isValid;
}

module.exports = {
  checkIsValidUserInput,
};
