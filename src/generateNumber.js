'use strict';

const generateNumber = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  digits.sort(() => Math.random() - 0.5);

  return digits.slice(0, 4).join('');
};

module.exports = { generateNumber };
