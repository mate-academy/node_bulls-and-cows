'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function isInputValid(userInput) {
  return typeof +userInput === 'number'
    && [...new Set(userInput.split(''))].length === EXPECTED_NUMBER_LENGTH;
}

module.exports = { isInputValid };
