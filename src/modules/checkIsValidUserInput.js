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
  return /^[0-9]{4}$/.test(userInput)
  && userInput[0] !== '0'
  && !hasDuplicates(userInput);
}

function hasDuplicates(numberArr) {
  return new Set(numberArr).size !== numberArr.length;
}

module.exports = {
  checkIsValidUserInput,
};
