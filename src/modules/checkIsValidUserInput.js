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
  let isValid = true;

  if (userInput.length !== 4) {
    isValid = false;
  }

  for (let i = 0; i < userInput.length; i++) {
    if (i === 0 && !'123456789'.includes(userInput[i])) {
      isValid = false;
    } else if (i !== 0 && !'1234567890'.includes(userInput[i])) {
      isValid = false;
    }
  }

  for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < userInput.length; j++) {
      if (i !== j && userInput[i] === userInput[j]) {
        isValid = false;
      }
    }
  }

  return isValid;
}

module.exports = {
  checkIsValidUserInput,
};
