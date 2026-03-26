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
  // Check if the input is a 4-digit number
  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  // Check if the number starts with 0
  if (userInput[0] === '0') {
    return false;
  }

  const numbers = userInput.split('');
  const hasDuplicates = new Set(numbers).size !== numbers.length;

  return !hasDuplicates;
}

module.exports = {
  checkIsValidUserInput,
};
