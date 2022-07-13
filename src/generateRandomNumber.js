'use strict';

function generateRandomNumber() {
  return Math.round(Math.random() * 10000);
}

module.exports.generateRandomNumber = generateRandomNumber;
