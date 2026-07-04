'use strict';

function checkIsValidUserInput(input) {
  // Перетворюємо ввід на рядок для зручності
  const strInput = String(input);

  // Перевірка на довжину та те, що це тільки цифри
  if (strInput.length !== 4 || !/^\d{4}$/.test(strInput)) {
    return false;
  }

  // Перевірка: число не може починатися з нуля
  if (strInput[0] === '0') {
    return false;
  }

  // Перевірка на унікальність цифр
  const uniqueDigits = new Set(strInput.split(''));

  return uniqueDigits.size === 4;
}

module.exports = { checkIsValidUserInput };
