'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = Array.from({ length: 10 }, (_, i) => i.toString());

  // Алгоритм Фишера–Йетса для перемешивания
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Если первая цифра оказалась "0", меняем её с первой ненулевой
  if (digits[0] === '0') {
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] !== '0') {
        [digits[0], digits[i]] = [digits[i], digits[0]];
        break;
      }
    }
  }

  // Берём первые 4 уникальные цифры
  const numberStr = digits.slice(0, 4).join('');

  return Number(numberStr);
}

module.exports = {
  generateRandomNumber,
};
