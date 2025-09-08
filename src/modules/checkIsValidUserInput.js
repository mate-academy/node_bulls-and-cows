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
  const userInputStr = userInput.toString();

  if (userInputStr.length !== 4 || userInputStr[0] === '0') {
    return false;
  }

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  for (let i = 0; i < userInputStr.length; i++) {
    for (let j = i + 1; j < userInputStr.length; j++) {
      if (userInputStr[i] === userInputStr[j]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
