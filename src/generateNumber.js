'use strict';

function generateNumber() {
  const DIGITS_POOL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let digits = '';

  while (digits.length < 4) {
    digits += DIGITS_POOL.splice(
      Math.floor(Math.random() * DIGITS_POOL.length),
      1,
    )[0];
  }

  return digits;
}

module.exports = { generateNumber };
