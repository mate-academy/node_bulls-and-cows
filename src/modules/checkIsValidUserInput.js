'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

function checkForDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index).length === 0;
}

function checkIsValidUserInput(userInput) {
  const hasCorrectLength = userInput.length === 4;
  const isNumber = !isNaN(+userInput);
  const noZero = userInput[0] !== '0';
  const noDuplicates = checkForDuplicates(userInput.split(''));

  return hasCorrectLength && isNumber && noZero && noDuplicates;
}

module.exports = {
  checkIsValidUserInput,
};
