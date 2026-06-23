'use strict';

function generateRandomNumber() {
  let result = '';
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const firstIndex = Math.floor(Math.random() * 9) + 1;

  result += digits[firstIndex];
  digits.splice(firstIndex, 1);

  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return +result;
}

module.exports = {
  generateRandomNumber,
};
