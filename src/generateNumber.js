'use strict';

function generateNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffled = digits.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, 4).join('');
}

module.exports = { generateNumber };
