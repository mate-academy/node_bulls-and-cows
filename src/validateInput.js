'use strict';

require('dotenv').config();

const NUMBER_LENGTH = parseInt(process.env.NUMBER_LENGTH, 10);

const validateInput = (input) => {
  return /^\d{4}$/.test(input) && new Set(input).size === NUMBER_LENGTH;
};

module.exports = validateInput;
