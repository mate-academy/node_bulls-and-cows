'use strict';

function getFourDigitsRandom() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    num += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return parseInt(num, 10);
}

module.exports = { getFourDigitsRandom };
