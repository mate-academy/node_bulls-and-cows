'use strict';

const setRandomNumber = () => {
  let number = '';

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();

    if (!number.includes(digit)) {
      number += digit;
    }
  }

  return number;
};

module.exports.randomNumber = setRandomNumber();
