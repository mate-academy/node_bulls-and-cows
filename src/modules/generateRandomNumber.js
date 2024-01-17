'use strict';

function generateRandomNumber() {
  let digits = Array.from({ length: 10 }, (_, i) => i);

  digits = digits.sort(() => Math.random() - 0.5);

  return digits.slice(0, 4).join('');
}

module.exports = { generateRandomNumber };
