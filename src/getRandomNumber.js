'use strict';

function getRandomNumber() {
  let result = '';

  for (let i = 0; i < 4; i++) {
    result += Math.floor(Math.random() * 9) + 1;
  }

  return result;
}

module.exports = { getRandomNumber };
