'use strict';

function generateFixedSizeNumber(length) {
  let digits = '0123456789';
  let number = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    number += digits[randomIndex];
    digits = digits.slice(0, randomIndex) + digits.slice(randomIndex + 1);
  }

  return Number(number);
}

module.exports = {
  generateFixedSizeNumber,
};
