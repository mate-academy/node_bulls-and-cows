'use strict';

const validateInput = (input) => {
  return /^\d{4}$/.test(input) && new Set(input).size === 4;
};

module.exports = validateInput;
