'use strict';

function generateNumber() {
  const differentRandomDigits = [];

  while (differentRandomDigits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!differentRandomDigits.includes(randomDigit)) {
      if (randomDigit === 0 && !differentRandomDigits.length) {
        continue;
      }
      differentRandomDigits.push(randomDigit);
    }
  }

  return differentRandomDigits.join('');
}

module.exports = { generateNumber };
