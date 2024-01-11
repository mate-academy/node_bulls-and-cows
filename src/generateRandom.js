'use strict';

function getRandomIntInclusive(min, max) {
  const from = Math.ceil(min);
  const to = Math.floor(max);

  return Math.floor(Math.random() * (to - from + 1) + from);
}

function get4Digits() {
  return getRandomIntInclusive(0, 9999).toString().padStart(4, '0');
}

module.exports = {
  getRandomIntInclusive,
  get4Digits,
};
