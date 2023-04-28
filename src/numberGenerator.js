'use strict';

const numberGenerator = () => {
  const number = new Set();

  while (number.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (number.size === 0 && digit === 0) {
      continue;
    }

    if (!number.has(digit)) {
      number.add(digit);
    }
  }

  return Array.from(number).join('');
};

module.exports = { numberGenerator };
