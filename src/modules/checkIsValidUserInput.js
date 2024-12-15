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
  // Перевіряємо, чи введене значення є числом і має рівно 4 цифри
  if (isNaN(userInput) || userInput.length !== 4) {
    // eslint-disable-next-line no-console
    console.log('Invalid input. Please enter a 4-digit number.');

    return false;
  }

  // Перевіряємо, чи не починається введене число з нуля
  if (userInput[0] === '0') {
    // eslint-disable-next-line no-console
    console.log('Error. Enter a 4-digit number that doesnt start with 0.');

    return false;
  }

  // Перевіряємо на унікальність цифр
  if (new Set(userInput).size !== userInput.length) {
    // eslint-disable-next-line no-console
    console.log('Error. Enter a 4-digit number that has only unique digits.');

    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
