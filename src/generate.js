'use strict';

module.exports = () => {
  let number = '';

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!number.includes(digit)) {
      number += digit;
    }
  }

  return number;
};
