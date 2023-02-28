'use strict';

const getDigit = () => Math.floor(Math.random() * 10);

const get4Digits = () => {
  const digits = [];

  for (let i = 0; i < 4; i++) {
    let digit = getDigit();

    while (digits.includes(digit)) {
      digit = getDigit();
    }

    digits.push(digit);
  }

  return digits;
};

module.exports = {
  get4Digits,
};
