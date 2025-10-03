'use strict';

function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const firstIndex = Math.floor(Math.random() * 9) + 1;
  const firstDigit = digits.splice(firstIndex, 1)[0];

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const lastThreeDigits = digits.slice(0, 3);

  return Number(firstDigit + lastThreeDigits.join(''));
}

module.exports = {
  generateRandomNumber,
};
