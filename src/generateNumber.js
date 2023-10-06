'use strict';

const { MAX_NUMBER, MIN_NUMBER } = require('./constants');

function generateNumber() {
  return Math.round(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
}

module.exports = {
  generateNumber,
};
