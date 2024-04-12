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

  if (userInput < 1000 || userInput > 9999) {
    return false;
  }

  const userInputString = userInput.toString();

  for (let i = 0; i < userInputString.length; i++) {
    for (let j = i + 1; j < userInputString.length; j++) {
      if (userInputString[i] === userInputString[j]) {
        return false;
      }
    }
  }

  if (userInputString[0] === '0') {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
