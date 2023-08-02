'use strict';

const validateInput = (value) => {
  if (isNaN(value)) {
    console.warn('All characters must be digits');

    return false;
  }

  if (value.length !== 4) {
    console.warn('There should be 4 digits');

    return false;
  }

  const userNumber = new Set(value);
  const isNumberValid = userNumber.size === 4;

  if (!isNumberValid) {
    console.warn('All digits should be different');

    return false;
  }

  return true;
};

module.exports = validateInput;
