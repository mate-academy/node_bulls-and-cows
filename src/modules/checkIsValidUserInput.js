'use strict';

/**
 * Checks that the user input is valid.
 * Valid input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the input is valid, false otherwise
 */
function checkIsValidUserInput(input) {
  if (input.length !== 4) {
    return false;
  }

  if (input[0] === '0') {
    return false;
  }

  const digitsSeen = new Set();

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    if (currentChar < '0' || currentChar > '9') {
      return false;
    }

    if (digitsSeen.has(currentChar)) {
      return false;
    }

    digitsSeen.add(currentChar);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
