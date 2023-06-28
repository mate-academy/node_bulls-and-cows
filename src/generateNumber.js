'use strict';

const { getRandomDigit } = require('./getRandomDigit');

function generateNumber(length = 4) {
  const uniques = [];

  for (let i = 0; i < length; i++) {
    let number = getRandomDigit();

    while (uniques.includes(number)) {
      number = getRandomDigit();
    }

    uniques.push(number);
  }

  return uniques.join('');
}

module.exports = {
  generateNumber,
};
