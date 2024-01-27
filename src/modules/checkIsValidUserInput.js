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
  const inputAsArray = String(userInput).split('');

  const isRightLength = inputAsArray.length === 4;
  const isNumber = !isNaN(Number(userInput));
  const isNonRepeating = new Set(inputAsArray).size === inputAsArray.length;
  const startsWithZero = String(userInput).startsWith('0');

  return isNumber && isRightLength && isNonRepeating && !startsWithZero;
}

module.exports = { checkIsValidUserInput };
