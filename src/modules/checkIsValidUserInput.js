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
  let isValid = true;

  if (
    userInputArr.length !== 4 ||
    new Set(userInputArr).size !== userInputArr.length
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
