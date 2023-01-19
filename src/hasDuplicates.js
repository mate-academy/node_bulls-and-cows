'use strict';

const _ = require('lodash');

const hasDuplicates = (number) => {
  return _.uniq(number.split('')).length !== number.length;
};

module.exports = { hasDuplicates };
