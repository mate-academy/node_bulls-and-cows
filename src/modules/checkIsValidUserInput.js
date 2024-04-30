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

  if (
    userInputArr.length !== allowedLength ||
    new Set(userInputArr).size !== allowedLength
  ) {
    return false;
  }

  if (userInputArr[0] === 0) {
    return false;
  }

  return userInputArr.every((el) => {
    return !isNaN(el);
  });
}

module.exports = {
  checkIsValidUserInput,
};
