'use strict';

function generateRandomNumber() {
  const set = new Set();

  while (set.size !== 4) {
    const random = Math.floor(Math.random() * 9) + 1;

    set.add(random);
  }

  return Number(Array.from(set).join(''));
}

module.exports = {
  generateRandomNumber,
};
