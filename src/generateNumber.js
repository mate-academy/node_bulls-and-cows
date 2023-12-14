'use strict';

const _ = require('lodash');
const { getNumbers } = require('./getNumbers');

const generateNumber = () => {
  const randomDigits = _.sampleSize(getNumbers(0, 9), 4);

  if (randomDigits[0] === '0') {
    generateNumber();
  }

  const randomNumber = randomDigits.join('');

  return randomNumber;
};

generateNumber();

module.exports = {
  generateNumber,
};
