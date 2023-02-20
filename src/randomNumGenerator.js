'use strict';

let digitsQuantity = 4;

const getRandomNumber = () => {
  const randomNumber = [];

  while (digitsQuantity > 0) {
    const randomDigit = Math.floor(Math.random() * (10 - 0) + 0);

    if (!randomNumber.includes(randomDigit)) {
      randomNumber.push(randomDigit);
      digitsQuantity--;
    }
  }

  return randomNumber.join('');
};

module.exports = { getRandomNumber };
