/* eslint-disable no-console */
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
  if (userInput.length > 4) {
    console.log('There are too many digits!');

    return false;
  }

  if (userInput.length < 4) {
    console.log('There are need more digits!');

    return false;
  }

  if (userInput[0] === '0') {
    console.log("First digit can't be '0'!");

    return false;
  }

  for (const char of userInput) {
    if (isNaN(+char)) {
      console.log('Input must contain only digits!');

      return false;
    }
  }

  const uniqueDigits = new Set(userInput);

  if (uniqueDigits.size < 4) {
    console.log('All digits must be unique!');

    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
