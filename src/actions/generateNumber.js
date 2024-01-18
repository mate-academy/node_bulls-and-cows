'use strict';

function generateRandomNumber() {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let randomNumber = '';

  while (randomNumber.length !== 4) {
    const index = Math.floor(Math.random() * digits.length);

    if (!randomNumber && digits[index] === '0') {
      continue;
    }

    randomNumber += digits[index];
    digits.splice(index, 1);
  }

  return randomNumber;
}

module.exports = { generateRandomNumber };
