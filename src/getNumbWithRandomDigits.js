'use strict';

const { DIGIT_COUNT, RANDOM_SCOPE } = require('./constants.js');

function getNumbWithRandomDigits() {
  let randomDigit = '';

  while ((+randomDigit).toString().length < DIGIT_COUNT) {
    const newDigit = Math.floor(Math.random() * RANDOM_SCOPE);

    if (randomDigit.includes(`${newDigit}`)) {
      continue;
    }

    randomDigit += newDigit;
  }

  return +randomDigit;
};

module.exports = {
  getNumbWithRandomDigits,
};
