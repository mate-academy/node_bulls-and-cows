'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function validateInput(input) {
  const inputSplited = input.split('');
  const inputSet = new Set(inputSplited);
  const isNumber = inputSplited.every(num => num >= 0 && num <= 9);
  const hasValidLength = inputSplited.length === EXPECTED_NUMBER_LENGTH;
  const hasDistinctDigits = inputSplited.length === inputSet.size;

  return hasValidLength && hasDistinctDigits && isNumber;
};

module.exports = {
  validateInput,
};
