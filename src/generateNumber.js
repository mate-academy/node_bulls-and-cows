'use strict';

const _ = require('lodash');
const { getNumbers } = require('./getNumbers');

const generateNumber = () => {
  const randomDigits = _.sampleSize(getNumbers(0, 9), 4);

  if (randomDigits[0] === '0') {
    generateNumber();
  }

  return randomDigits.join('');
};

module.exports = {
  generateNumber,
};
