'use strict';

function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffledDigits = digits.sort(() => Math.random() - 0.5);
  const randomNumber = shuffledDigits.slice(0, 4).join('');

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
