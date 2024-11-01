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
  // Перевірка, що це 4-значне число
  if (userInput.length !== 4 || isNaN(+userInput)) {
    return false;
  }

  // Перевірка, що число не починається з 0
  if (userInput[0] === '0') {
    return false;
  }

  // Перевірка на дублікати за допомогою Set
  const uniqueDigits = new Set(userInput.split(''));

  return uniqueDigits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
