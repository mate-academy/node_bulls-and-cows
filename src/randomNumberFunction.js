'use strict';

function random(min = 1000, max = 9999) {
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

module.exports = { random };
