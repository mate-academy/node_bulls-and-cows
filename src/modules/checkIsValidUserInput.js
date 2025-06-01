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
  /* Write your code here */
  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  // si cela commence par 0
  if (userInput[0] === '0') {
    return false;
  }

  // Vérifier les chiffres en double ou pair
  const digits = new Set(userInput);

  return digits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
