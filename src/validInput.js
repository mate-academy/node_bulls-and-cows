'use strict';

const validinput = (value) => {
  if (!Number.isInteger(value)) {
    throw new Error('All characters should be integer digits');
  }

  if (value.length !== 4) {
    throw new Error('There should be 4 digits');
  }

  const userDigits = new Set(value);
  const isDigitsValid = userDigits.size === 4;

  if (!isDigitsValid) {
    throw new Error('All digits should be different');
  }

  return true;
};

module.exports = validinput;
