'use strict';

module.exports = function generateRandomNumber(MAX_DIGITS, MAX_NUMBER) {
  let numbers = [...Array(MAX_NUMBER).keys()];

  numbers = numbers.sort(() => Math.random() - 0.5);

  return numbers.slice(0, MAX_DIGITS).join('');
};
