'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [];

  // Garante que o primeiro dígito não seja 0
  const firstDigit = Math.floor(Math.random() * 9) + 1; // 1-9

  digits.push(firstDigit);

  // Adiciona os outros 3 dígitos (0-9, sem repetição)
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    // Garante que não há dígitos repetidos
    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  // Converte o array de dígitos para um número
  return parseInt(digits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
