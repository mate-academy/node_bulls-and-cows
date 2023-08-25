'use strict';

function generateRandomNumber() {
  const usedDigits = new Set();
  let result = '';

  while (usedDigits.size < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!usedDigits.has(randomDigit)) {
      usedDigits.add(randomDigit);
      result += randomDigit;
    }
  }

  return result;
}

module.exports = generateRandomNumber;
