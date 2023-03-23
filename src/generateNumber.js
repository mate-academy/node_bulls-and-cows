'use strict';

const getRandomNum = () => {
  const rand = 1 - 0.5 + Math.random() * (9 - 1 + 1);

  return Math.round(rand);
};

const generateNumber = () => {
  const arr = [];

  while (arr.length !== 4) {
    const currentNum = getRandomNum();

    if (!arr.includes(currentNum)) {
      arr.push(currentNum);
    }
  }

  return arr.join('');
};

module.exports = { generateNumber };
