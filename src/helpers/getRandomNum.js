'use strict';

const { isAllDigitsUnique } = require('./isAllDigitsUnique');

function getRandom() {
  const randomNumber = Math.random() * (9999 - 1000) + 1000;
  const floorNum = Math.floor(randomNumber);

  if (isAllDigitsUnique(floorNum)) {
    return floorNum;
  }

  return getRandom();
};

module.exports.getRandom = getRandom;
