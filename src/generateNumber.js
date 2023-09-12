'use strict';

const generateNumber = () => {
  let num = '';

  while (num.length !== 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!num.includes(digit)) {
      num += digit;
    }
  }

  return num;
};

module.exports = {
  generateNumber,
};
