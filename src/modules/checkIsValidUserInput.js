'use strict';

const IS_4_DIGIT_NUMBER = /^[1-9][0-9]{3}$/;

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (!userInput.match(IS_4_DIGIT_NUMBER)) {
    return false;
  }

  const digits = [...userInput].map((char) => Number(char));
  const uniqueDigits = new Set(digits);

  return digits.length === uniqueDigits.size;
}

module.exports = {
  checkIsValidUserInput,
};
