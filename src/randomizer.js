'use strict';

function getRandomNumber(digitsCount) {
  let randomNumber = '';

  for (let i = 0; i < digitsCount; i++) {
    let randomDigit = 0;

    while (!randomDigit || randomNumber.includes(randomDigit)) {
      randomDigit = Math.round(1 + Math.random() * 8);
    }

    randomNumber += randomDigit;
  }

  return Number(randomNumber);
}

module.exports = getRandomNumber;
