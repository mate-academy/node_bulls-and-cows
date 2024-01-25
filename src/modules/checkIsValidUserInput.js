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
  const length = userInput.length;
  const isInRange = userInput >= 1234 && userInput <= 9876;
  const isNumber = !isNaN(Number(userInput));
  const isUnique = isNumberUnique(userInput);

  return length === 4 && isInRange && isNumber && isUnique;
}

const isNumberUnique = (number) => {
  const digits = number.toString().split('');
  const uniqueDigits = new Set(digits);

  return digits.length === uniqueDigits.size;
};

module.exports = {
  checkIsValidUserInput,
};
