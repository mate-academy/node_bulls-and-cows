'use strict';

const { random } = require('lodash');

const getRandomNumbers = () => {
  let result = '';

  while (result.length < 4) {
    const randomNumber = random(0, 9);

    if (!result.includes(randomNumber)) {
      result += randomNumber;
    }
  }

  return result;
};

module.exports = {
  getRandomNumbers,
};
