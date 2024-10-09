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
  const userArr = userInput.split('');

  if (userArr[0] === '0') {
    return false;
  }

  if (userArr.map((digit) => isNaN(+digit)).some((entry) => entry === true)) {
    return false;
  }

  const checkNumber = Array.from(new Set(userArr));

  return checkNumber.length === 4;
}

module.exports = checkIsValidUserInput;
