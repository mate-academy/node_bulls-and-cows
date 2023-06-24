'use strict';

function getRandomNum() {
  const set = new Set();

  while (set.size < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    set.add(randomNumber);
  }

  return [...set].join('');
}

const randomNum = getRandomNum();

module.exports = { randomNum };
