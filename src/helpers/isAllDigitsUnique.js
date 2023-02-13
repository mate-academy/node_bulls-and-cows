'use strict';

module.exports.isAllDigitsUnique = (num) => {
  const numStr = `${num}`;
  const map = {};

  for (const digit of numStr) {
    map[digit] ? map[digit]++ : map[digit] = 1;
  }

  return !Object.values(map).some(value => value > 1);
};
