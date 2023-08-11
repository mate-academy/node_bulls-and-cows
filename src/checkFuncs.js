'use strict';

function isNumber(number) {
  return typeof number === 'number' && !Number.isNaN(number);
}

function isFourDigitNumber(number) {
  return number >= 1000 && number <= 9999;
}

module.exports = {
  isNumber, isFourDigitNumber,
};
