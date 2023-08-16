'use strict';

const { config } = require('dotenv');

config();

function generateNumbers() {
  const numbers = [];
  const numbersCount = process.env.NUMBERS_COUNT;

  while (numbers.length < numbersCount) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomDigit)) {
      numbers.push(randomDigit);
    }
  }

  return numbers;
}

module.exports.generateNumbers = generateNumbers;
