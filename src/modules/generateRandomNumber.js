'use strict';

function generateRandomNumber() {
  while (true) {
    // Генеруємо число від 1000 до 9999 (щоб не було нуля на початку)
    const num = Math.floor(Math.random() * 9000) + 1000;

    // Перевіряємо унікальність цифр
    const digits = new Set(String(num).split(''));

    if (digits.size === 4) {
      return num; // Повертаємо саме число, як просять тести
    }
  }
}

module.exports = { generateRandomNumber };
