'use strict';

const UPPER_VALUE = 9000;
const BOTTOM_VALUE = 1000;

function generateNumber() {
  return Math.floor(BOTTOM_VALUE
    + Math.random() * UPPER_VALUE).toString();
}

module.exports = { generateNumber };
