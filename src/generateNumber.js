'use strict';

const generateNumber = () => {
  let num = Math.floor(Math.random() * 9000) + 1000;

  while (new Set(num.toString()).size !== 4) {
    num = Math.floor(Math.random() * 9000) + 1000;
  }

  return num;
};

module.exports = { generateNumber };
