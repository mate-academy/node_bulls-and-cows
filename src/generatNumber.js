'use strict';

function generateNumber() {
  return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

module.exports.generateNumber = generateNumber;
