'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input ( expected to be trimmed )
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  const input = String(userInput).trim();
  const isFourDigits = /^\d{4}$/.test(input);

  if (!isFourDigits) {
    return false;
  }

  if (input[0] === '0') {
    return false;
  }

  const digits = new Set(input);

  return digits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
