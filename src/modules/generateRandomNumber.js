'use strict';

function generateRandomNumber() {
  let randomNumber = '';

  randomNumber += Math.floor(Math.random() * 9) + 1;

  while (randomNumber.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!randomNumber.includes(digit.toString())) {
      randomNumber += digit;
    }
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
