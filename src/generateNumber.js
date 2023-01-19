'use strict';

const _ = require('lodash');

const generateNumber = () => {
  const res = [];

  while (res.length !== 4) {
    const number = _.random(9);

    if (!res.includes(number)) {
      res.push(number);
    }
  }

  return res.join('');
};

module.exports = { generateNumber };
