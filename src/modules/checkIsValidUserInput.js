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
  // Перевіряємо, чи введене значення є рядком із 4 цифр
  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  // Перевіряємо, чи не починається з 0
  if (userInput[0] === '0') {
    return false;
  }

  // Перевіряємо, чи немає повторюваних цифр
  const digits = new Set(userInput);

  return digits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
