'use strict';

const isValid = (input) => {
  return new Set(input).size === 4
    && !isNaN(input);
};

module.exports = { isValid };
