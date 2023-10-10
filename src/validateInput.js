'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function validateInput(input) {
  const inputSplited = input.split('');
  const inputSet = new Set(inputSplited);
  const hasValidLength = inputSplited.length === EXPECTED_NUMBER_LENGTH;
  const hasDistinctDigits = inputSplited.length === inputSet.size;

  return hasValidLength && hasDistinctDigits;
};

module.exports = {
  validateInput,
};
