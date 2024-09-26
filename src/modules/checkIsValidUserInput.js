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
  const userInputArr = userInput.split('').map((el) => Number(el));
  const allowedLength = 4;
  let isValid = true;

  if (
    userInputArr.length !== allowedLength ||
    new Set(userInputArr).size !== allowedLength
  ) {
    return false;
  }

  userInputArr.forEach((el, i, arr) => {
    if (isNaN(el) || arr[0] === 0) {
      isValid = false;
    }
  });

  return isValid;
}

module.exports = {
  checkIsValidUserInput,
};
