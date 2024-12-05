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
  const numbers = userInput.split('');
  const set = new Set(numbers);

  const isValid = numbers.every((num) => {
    return !isNaN(+num);
  });

  if (!isValid) {
    return false;
  }

  if (+numbers[0] === 0) {
    return false;
  }

  if (set.size < numbers.length) {
    return false;
  }

  if (numbers.length !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
