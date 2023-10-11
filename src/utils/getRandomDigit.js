'use strict';

const { constants } = require('./constants');

function getRandomDigits() {
  const ALL_DIGITS = 10;
  let digit = '';

  while (digit.length < constants.MAX_LENGTH) {
    const randomDigit = `${Math.floor(Math.random() * ALL_DIGITS)}`;

    if (!digit.includes(randomDigit)) {
      digit += randomDigit;
    }
  }

  return digit;
}

// function getStat() {
//   const arr = [];

//   for (let i = 0; i < 1000000; i++) {
//     arr.push(getRandomDigits()[1]);
//   }

//   return arr.sort((a, b) => b - a)[0];
// }

module.exports = {
  getRandomDigits,
};
