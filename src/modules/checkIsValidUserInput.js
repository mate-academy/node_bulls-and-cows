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
  const noZero = userInput[0] !== '0';
  const areNumbers = Number(userInput) || false;
  const noDuplicates = userInput.length === new Set(userInput.split('')).size;

  return isValidLength && noZero && areNumbers && noDuplicates;
}

module.exports = {
  checkIsValidUserInput,
};
