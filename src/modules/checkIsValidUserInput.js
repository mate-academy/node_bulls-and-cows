'use strict';

function hasDuplicates(str) {
  return new Set(str).size !== str.length;
}

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  const notValidLength = userInput.length !== 4;
  const startWithZero = userInput[0] === '0';
  const withDuplicates = hasDuplicates(userInput);
  const notValid = notValidLength || startWithZero || withDuplicates;

  if (notValid) {
    return false;
  }

  const number = Number(userInput);

  return !Number.isNaN(number) && Number.isInteger(number);
}

module.exports = {
  checkIsValidUserInput,
};
