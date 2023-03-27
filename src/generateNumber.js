'use strict';

function getRandomArbitrary(min, max) {
  return ~~(Math.random() * (max - min) + min);
}

const randomNumber = getRandomArbitrary(1000, 9999);

module.exports = { randomNumber };
