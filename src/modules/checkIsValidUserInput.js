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
  if (isNaN(userInput)) {
    return false;
  }

  const processInput = userInput.toString().split('').map(Number);

  if (processInput.length !== 4 || processInput[0] === 0) {
    return false;
  }

  const inputObj = {};

  for (const n of processInput) {
    inputObj[n] = (inputObj[n] || 0) + 1;
  }

  for (const val of Object.values(inputObj)) {
    if (val > 1) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
