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
  if (userInput.length !== 4 || isNaN(userInput) || userInput[0] === '0') {
    return false;
  }

  const userInputArray = userInput.split('');
  const uniqueUserInputArray = [...new Set(userInput.split(''))];

  if (userInputArray.length !== uniqueUserInputArray.length) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
