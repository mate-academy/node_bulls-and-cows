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
  const guess = userInput.trim();
  const number = Number(guess);

  // Ensure input is an actual number
  if (Number.isNaN(number)) {
    return false;
  }

  // Ensure valid number is passed
  if (number < 1000 || number > 9999 || +userInput[0] === 0) {
    return false;
  }

  // Ensure no duplicate digits are present
  const quickSet = new Set(userInput.split(''));

  if (quickSet.size < 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
