/* eslint-disable no-console */
'use strict';

const validateInput = (value) => {
  const hasNonNumericCharacters = /\D/.test(value);

  if (hasNonNumericCharacters) {
    console.warn('All characters must be digits');

    return false;
  }

  if (value.length !== 4) {
    console.warn('There should be 4 digits');

    return false;
  }

  const userDigits = new Set(value);
  const isDigitsValid = userDigits.size === 4;

  if (!isDigitsValid) {
    console.warn('All digits should be different');

    return false;
  }

  return true;
};

module.exports = validateInput;
