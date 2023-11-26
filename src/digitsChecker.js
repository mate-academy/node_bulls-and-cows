'use strict';

const { number } = require('./numberGenerator');

const checker = (digits) => {
  let output = '';

  if (digits.length !== number.length) {
    return 'Should be exactly 4 digits';
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits.indexOf(digits[i]) !== digits.lastIndexOf(digits[i])) {
      return 'Digits should be different';
    }

    if (digits[i] === number[i]) {
      output += 'bull';
    } else if (number.includes(digits[i])) {
      output += 'cow';
    } else {
      output += ' ';
    }
  }

  return output;
};

module.exports = {
  checker,
};
