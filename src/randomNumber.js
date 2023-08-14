'use strict';

const { NUMBER_OF_DIGITS } = require('./constants');

const generateRandomNumber = () => {
  const generatedDigits = [];

  while (generatedDigits.length < NUMBER_OF_DIGITS) {
    const generatedNumber = Math.floor(Math.random() * 10);

    if (!generatedDigits.includes(generatedNumber)) {
      generatedDigits.push(generatedNumber);
    }
  }

  return generatedDigits;
};

module.exports = {
  generateRandomNumber,
};
