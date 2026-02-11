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
  /* Write your code here */
  const isFourDigits = userInput.length === 4;
  const startsWithZero = userInput.startsWith('0');
  const isNumeric = /^\d+$/.test(userInput);
  const isUnique = new Set(userInput).size === userInput.length;

  if (isFourDigits && !startsWithZero && isNumeric && isUnique) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkIsValidUserInput,
};
