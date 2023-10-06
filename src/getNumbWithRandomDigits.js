'use strict';

function getNumbWithRandomDigits() {
  const DIGIT_COUNT = 4;
  const RANDOM_SCOPE = 10;

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
