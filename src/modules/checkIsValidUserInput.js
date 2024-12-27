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
  const isFourDigits = userInput.length === 4;
  const hasUniqueDigits = new Set(userInput.split('')).size === 4;
  const isNumber = !isNaN(+userInput);
  const doesNotStartWithZero = userInput[0] !== '0';

  return isFourDigits && hasUniqueDigits && isNumber && doesNotStartWithZero;
}

module.exports = {
  checkIsValidUserInput,
};
