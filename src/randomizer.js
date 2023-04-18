'use strict';

function getRandomNumber(from, to) {
  return Math.round(from + Math.random() * (to - from));
}

module.exports = getRandomNumber;
