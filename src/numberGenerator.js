'use strict';

const GET_RANDOM_DIGITS_FORMULA = Math.floor(1000 + Math.random() * 9000);

function generateNumber() {
  return GET_RANDOM_DIGITS_FORMULA.toString();
}

module.exports = { generateNumber };
