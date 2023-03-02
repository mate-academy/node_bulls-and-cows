'use strict';

const getDigit = () => Math.floor(Math.random() * 10);

const get4Digits = () => {
  const digits = [];

  while (digits.length < 4) {
    const digit = getDigit();

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return digits;
};

module.exports = {
  get4Digits,
};
