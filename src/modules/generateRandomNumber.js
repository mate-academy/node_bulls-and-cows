'use strict';

function generateRandomNumber() {
  const result = [];

  while (result.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (result.length === 0 && digit === 0) {
      continue;
    }

    if (!result.includes(digit)) {
      result.push(digit);
    }
  }

  return +result.join('');
}

module.exports = {
  generateRandomNumber,
};
