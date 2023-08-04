'use strict';

const check = (number, guess) => {
  const obj = {
    bull: 0,
    cow: 0,
  };
  const numberStr = number.toString();

  guess.split('').forEach((digit, i) => {
    if (numberStr[i] === digit) {
      obj.bull += 1;

      return;
    }

    if (numberStr.includes(digit)) {
      obj.cow += 1;
    }
  });

  return obj;
};

module.exports = { check };
