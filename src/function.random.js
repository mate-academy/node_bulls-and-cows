'use strict';

const getRandom = function() {
  const set = new Set();
  const num = [];

  while (set.size < 4) {
    set.add(Math.floor(Math.random() * 10));
  }

  for (const i of set) {
    num.push(i);
  }

  return +num.join('');
};

module.exports = {
  getRandom,
};
