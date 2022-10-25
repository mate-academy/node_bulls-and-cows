'use strict';

const generatorOfNumber = () => {
  return Math.trunc(Math.random() * 10000);
};

module.exports = { generatorOfNumber };
