'use strict';

const { config } = require('dotenv');

config();

function generateNumbers() {
  const numbers = [];
  const numbersCount = process.env.NUMBERS_COUNT;

  for (let i = 0; i < numbersCount; i++) {
    const randomDigit = Math.floor(Math.random() * 10);

    numbers.push(randomDigit);
  }

  return numbers;
}

module.exports.generateNumbers = generateNumbers;
