'use strict';

module.exports = function generateRandomNumber() {
  let numbers = [...Array(10).keys()];

  numbers = numbers.sort(() => Math.random() - 0.5);

  return numbers.slice(0, 4).join('');
};
