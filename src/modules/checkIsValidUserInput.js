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
  // Remove espaços em branco
  const cleaned = userInput.trim();

  // Verifica se tem exatamente 4 caracteres
  if (cleaned.length !== 4) {
    return {
      valid: false,
      error: 'O número deve ter exatamente 4 dígitos',
    };
  }

  // Verifica se todos são dígitos
  if (!/^\d{4}$/.test(cleaned)) {
    return {
      valid: false,
      error: 'O número deve conter apenas dígitos (0-9)',
    };
  }

  // Verifica se há dígitos repetidos
  const digits = cleaned.split('');
  const uniqueDigits = new Set(digits);

  if (uniqueDigits.size !== 4) {
    return {
      valid: false,
      error: 'O número deve ter 4 dígitos diferentes (sem repetição)',
    };
  }

  return { valid: true };
}

module.exports = {
  checkIsValidUserInput,
};
