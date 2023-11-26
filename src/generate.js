'use strict';

function generate() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  for (let i = 0; i < 4; i++) {
    const randomPos = Math.ceil(Math.random() * (9 - i));
    const randomNum = digits[randomPos];

    digits.splice(randomPos, 1);
    result.push(randomNum);
  }

  return Number(result.join(''));
};

module.exports = {
  generate,
};
