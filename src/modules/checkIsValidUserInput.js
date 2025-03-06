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
  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  const userInputValues = userInput.split('');

  for (let i = 0; i < userInputValues.length; i++) {
    if (userInputValues.slice(i + 1).includes(userInputValues[i])) {
      return false;
    }
  }

  for (const value of userInputValues) {
    if (isNaN(+value)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
