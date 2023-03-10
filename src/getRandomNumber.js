'use strict';

function getRandomNumber() {
  const firstDigit = Math.floor(Math.random() * 9) + 1;
  const otherDigits = [];

  while (otherDigits.length < 3) {
    const digit = Math.floor(Math.random() * 10);

    if (!otherDigits.includes(digit) && digit !== firstDigit) {
      otherDigits.push(digit);
    }
  }

  const num = parseInt(`${firstDigit}${otherDigits.join('')}`);

  return num;
}

module.exports = {
  getRandomNumber,
};
