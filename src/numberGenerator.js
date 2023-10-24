'use strict';

const MAX_NUMBER = 10;

module.exports = function generateRandomNumber() {
  let numbers = [...Array(MAX_NUMBER).keys()];

  numbers = numbers.sort(() => Math.random() - 0.5);

  return numbers.slice(0, 4).join('');
};
