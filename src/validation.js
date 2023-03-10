'use strict';

function checkLength(number) {
  return number.length === 4;
}

function validNumber(number) {
  return isNaN(+number);
}

function checkDuplicates(number) {
  return new Set(number).size === 4;
}

module.exports = {
  checkLength,
  validNumber,
  checkDuplicates,
};
