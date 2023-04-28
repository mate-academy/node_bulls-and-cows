'use strict';

function get4random() {
  const fourRandom = new Set();

  while (fourRandom.size < 4) {
    const newRandom = Math.floor(Math.random() * 10);

    if (!fourRandom.has(newRandom)) {
      fourRandom.add(newRandom);
    }
  }

  return Array.from(fourRandom);
}

module.exports = {
  get4random,
};
