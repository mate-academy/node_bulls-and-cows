'use strict';

const generator = () => {
  let digits = '';

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits += digit;
    }
  }

  return digits;
};

module.exports = {
  generator,
};
