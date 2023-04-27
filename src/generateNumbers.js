'use strict';

const { TOTAL_DIGITS } = require('./constants/constants');

function generateNumbers() {
  const futureNumber = [];

  while (futureNumber.length < TOTAL_DIGITS) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!futureNumber.includes(randomNumber)) {
      futureNumber.push(randomNumber);
    }
  }

  return futureNumber.join('');
}

module.exports = generateNumbers;
