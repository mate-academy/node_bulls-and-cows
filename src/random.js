'use strict';

function getRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const result = [];

  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result.push(digits[randomIndex]);

    digits.splice(randomIndex, 1);
  }

  return result;
}

module.exports.getRandomNumber = getRandomNumber;
