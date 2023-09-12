'use strict';

function generateRandomNumber() {
  let digits = '0123456789';
  let randomNum = '';

  while (randomNum.length < 4) {
    const randomDigitIndex = Math.floor(Math.random() * digits.length);

    randomNum += digits[randomDigitIndex];

    digits = digits.slice(0, randomDigitIndex)
      + digits.slice(randomDigitIndex + 1);
  }

  return randomNum;
}

module.exports = {
  generateRandomNumber,
};
