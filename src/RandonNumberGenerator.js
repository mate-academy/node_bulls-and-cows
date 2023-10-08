'use strict';

const generateRandomNumber = (params) => {
  const COUNT_OF_DIGITS = 4;
  const RANDOM_SCOPE = 10;

  let randomDigit = '';

  while ((+randomDigit).toString().length < COUNT_OF_DIGITS) {
    const newDigit = Math.floor(Math.random() * RANDOM_SCOPE);

    if (randomDigit.includes(`${newDigit}`)) {
      continue;
    }

    randomDigit += newDigit;
  }

  return +randomDigit;
};

module.exports = { generateRandomNumber };
