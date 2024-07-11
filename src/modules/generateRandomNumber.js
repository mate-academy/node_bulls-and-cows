'use strict';

function generateRandomNumber() {
  function getRandomDigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const digits = [];

  digits.push(getRandomDigit(1, 9));

  while (digits.length < 4) {
    const newDigit = getRandomDigit(0, 9);

    if (!digits.includes(newDigit)) {
      digits.push(newDigit);
    }
  }

  return parseInt(digits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
