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
  // Проверка: должно быть ровно 4 символа
  if (userInput.length !== 4) {
    return false;
  }

  // Проверка: все символы — цифры
  if (!/^\d+$/.test(userInput)) {
    return false;
  }

  // Проверка: первая цифра не "0"
  if (userInput[0] === '0') {
    return false;
  }

  // Проверка: все цифры уникальные
  const digits = new Set(userInput);

  if (digits.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
