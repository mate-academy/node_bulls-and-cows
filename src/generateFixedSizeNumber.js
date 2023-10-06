'use strict';

function generateFixedSizeNumber(length) {
  const minNumber = Math.pow(10, length - 1);

  return Math.floor(Math.random() * (9 * minNumber) + minNumber);
}

module.exports = {
  generateFixedSizeNumber,
};
