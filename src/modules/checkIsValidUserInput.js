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
  if (userInput !== String(+userInput)) {
    return false;
  }

  const partsOfNumber = userInput.split('');

  const isFourDigitNumber = partsOfNumber.length === 4;
  const isFirstDigitValid = partsOfNumber[0] !== '0';
  const isNotContainDuplicate = new Set(partsOfNumber).size === 4;

  return isFourDigitNumber && isFirstDigitValid && isNotContainDuplicate;
}

checkIsValidUserInput('1548');

module.exports = {
  checkIsValidUserInput,
};
