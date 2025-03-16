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
  const numbers = userInput.split('').map(Number);

  if (
    numbers.length !== 4 ||
    numbers[0] === 0 ||
    numbers.some((el) => isNaN(el))
  ) {
    return false;
  }

  const uniqueNumbers = new Set(numbers);

  if (uniqueNumbers.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
