'use strict';

const rng = () => {
  const number = [];

  for (let i = 0; number.length < 4; i++) {
    const digit = Math.floor(Math.random() * 10);

    if (number[0] === 0) {
      number.shift();
    }

    if (number.indexOf(digit) === -1) {
      number.push(digit);
    }
  }

  return +number.join('');
};

module.exports = rng;
