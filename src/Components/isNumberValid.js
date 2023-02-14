'use strict';

const isNumberValid = (number) => {
  if (number.length !== 4 || isNaN(+number)) {
    return false;
  }

  const uniqueElements = new Set(number);

  if (uniqueElements.size !== number.length) {
    return false;
  }

  return true;
};

module.exports = { isNumberValid };
