'use strict';

function isNumberUnique(number) {
  const numberSet = new Set(number);

  if (numberSet.size !== number.length) {
    return false;
  }

  return true;
};

module.exports.isNumberUnique = isNumberUnique;
