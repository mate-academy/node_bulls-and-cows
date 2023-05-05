'use strict';

const { TOTAL_DIGITS } = require('./utils/constants/constants');

function generateNumbers() {
  const futureNumber = [];

  while (futureNumber.length < TOTAL_DIGITS) {
    const randomNumber = Math.floor(Math.random() * 10);

    const isNumberUnique = !futureNumber.includes(randomNumber);

    if (isNumberUnique) {
      futureNumber.push(randomNumber);
    }
  }

  return futureNumber.join('');
}

module.exports = generateNumbers;
