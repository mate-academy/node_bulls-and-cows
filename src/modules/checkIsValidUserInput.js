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
  const userInputArray = userInput.split('');
  const isNumeric = userInputArray.every((item) => !isNaN(item));

  if (
    userInputArray.length !== 4 ||
    userInputArray[0] === '0' ||
    new Set(userInputArray).size !== 4 ||
    !isNumeric
  ) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
