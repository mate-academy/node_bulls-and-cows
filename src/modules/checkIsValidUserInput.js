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
  if (isNaN(userInput)) {
    // eslint-disable-next-line no-console
    console.log('Invalid input. Please enter a 4-digit number.');

    return false;
  }

  const numbers = String(userInput)
    .split('')
    .map((n) => Number(n));

  if (numbers[0] === 0 || numbers.length !== 4) {
    // eslint-disable-next-line no-console
    console.log('Error. Enter a 4-digit number that doesnt start with 0.');

    return false;
  }

  if (new Set(numbers).size !== numbers.length) {
    // eslint-disable-next-line no-console
    console.log('Error. Enter a 4-digit number that has only unique digits.');

    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
