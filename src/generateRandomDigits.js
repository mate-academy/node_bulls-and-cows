'use strict';

const { random } = require('lodash');

function generateDigits() {
  let digits = '';

  while (digits.length < 4) {
    const randomInt = random(0, 9).toString();

    if (!digits.includes(randomInt)) {
      digits += randomInt;
    }
  }

  return digits;
}

module.exports = { generateDigits };
