'use strict';

const generateNum = () => {
  const result = [];

  while (result.length !== 4) {
    const int = Math.floor(Math.random() * 9) + 1;

    if (!result.includes(int)) {
      result.push(int);
    }
  }

  return +result.join('');
};

module.exports = { generateNum };
