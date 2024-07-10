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

  // Додаємо неповторні цифри від 0 до 9 у масив
  while (digits.length < 4) {
    const num = Math.floor(Math.random() * 10);

    // Переконаємось, що цифра не дублюється і не є 0, якщо це перша цифра
    if (!digits.includes(num) && (digits.length > 0 || num !== 0)) {
      digits.push(num);
    }
  }

  // Перетворюємо масив цифр у число
  return parseInt(digits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
