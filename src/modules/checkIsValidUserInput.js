'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

function isNumeric(string) {
  return /^[0-9]*$/.test(string);
}

function checkIsValidUserInput(userInput) {
  if (!userInput) {
    return false;
  }

  if (userInput[0] === '0' || userInput.length !== 4 || !isNumeric(userInput)) {
    return false;
  }

  let prevDigits = '';

  for (const digit of userInput) {
    if (prevDigits.includes(digit)) {
      return false;
    }

    prevDigits += digit;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
