'use strict';

function generateRandomNumber() {
  const result = new Set();

  result.add(Math.floor(Math.random() * 9 + 1));

  while (result.size < 4) {
    result.add(Math.floor(Math.random() * 10));
  }

  const number = parseInt(Array.from(result).join(''), 10);

  return number;
}

module.exports = {
  generateRandomNumber,
};
