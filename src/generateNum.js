'use strict';

const { random } = require('lodash');

const generateNum = () => {
  return random(1000, 9999);
};

module.exports = { generateNum };
