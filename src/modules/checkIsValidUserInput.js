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
  let isValid = true;
  let errorMessage = '';

  if (isNaN(Number(userInput))) {
    isValid = false;
    errorMessage = 'Invalid input. Please enter a 4-digit number.';
  }

  const numbers = userInput.split('').map((n) => Number(n));

  if (numbers[0] === 0 || numbers.length !== 4) {
    isValid = false;
    errorMessage = 'Error. Enter a 4-digit number that doesnt start with 0.';
  }

  if (new Set(numbers).size !== numbers.length) {
    isValid = false;
    errorMessage = 'Error. Enter a 4-digit number that has only unique digits.';
  }

  return {
    isValid,
    errorMessage,
  };
}

module.exports = {
  checkIsValidUserInput,
};
