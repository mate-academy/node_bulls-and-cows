'use strict';

const { NUMBER_SIZE } = require('../constants');

const isNumberValid = (num) => {
  const stringNumber = num.toString();

  return new Set(stringNumber.split('')).size === stringNumber.length
    && stringNumber.length === NUMBER_SIZE
    && stringNumber.match(/\d+/);
};

module.exports = isNumberValid;
