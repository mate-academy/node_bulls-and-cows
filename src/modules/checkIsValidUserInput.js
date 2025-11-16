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
  const userNumber = userInput.split('');
  const numberSet = new Set();

  for (const number of userNumber) {
    numberSet.add(number);
  }

  if (
    userNumber.length === 4 &&
    userNumber.length === numberSet.size &&
    +userNumber[0] !== 0 &&
    !userNumber.some((elem) => isNaN(elem))
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkIsValidUserInput,
};
