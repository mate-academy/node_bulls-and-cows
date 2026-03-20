'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

function hasDuplicateDigits(number) {
  const numberToStr = String(number);
  const uniqDigits = new Set(numberToStr);

  if (uniqDigits.size === numberToStr.length) {
    return false;
  }

  return true;
}

function checkIsValidUserInput(userInput) {
  const checkIsNumber = !Number.isNaN(+userInput);

  if (!checkIsNumber || userInput.length !== 4) {
    return false;
  }

  const userInputDigits = userInput.split('');

  if (+userInputDigits[0] === 0 || hasDuplicateDigits(userInput)) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
