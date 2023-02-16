'use strict';

const numberCheck = function(digit) {
  const numbers = new Set(digit);

  return digit.length !== 4 || numbers.size !== 4;
};

module.exports = {
  numberCheck,
};
