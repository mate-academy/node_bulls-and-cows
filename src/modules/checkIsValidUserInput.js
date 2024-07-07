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
  if (!Number(userInput)) {
    return false;
  }

  const stringifiedInput = String(userInput);

  if (stringifiedInput[0] === '0') {
    return false;
  }

  if (stringifiedInput.length !== 4) {
    return false;
  }

  const numbers = stringifiedInput.split('');
  const numbersFilter = {};

  for (const i of numbers) {
    if (!numbersFilter[i]) {
      numbersFilter[i] = true;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
