'use strict';

const hasDifferentDigits = (number) => {
  const strNumber = number.toString();

  return new Set(strNumber).size === strNumber.length;
};

module.exports = {
  hasDifferentDigits,
};
