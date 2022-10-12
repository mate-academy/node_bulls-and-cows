'use strict';

function getRandom() {
  let res = '';

  for (let i = 0; i < 4; i++) {
    res += Math.floor(Math.random() * 9) + 1;
  }

  return res;
}

const randomNumber = getRandom();

module.exports = { randomNumber };
