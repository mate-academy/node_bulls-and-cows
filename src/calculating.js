'use strict';

const calculating = (number, answer) => {
  const bulls = [];
  const cows = [];

  const len = answer.toString().length;

  for (let i = 0; i < len; i++) {
    const pcValue = number.toString().split('')[i];
    const inputValue = answer.toString().split('')[i];

    if (pcValue === inputValue) {
      bulls.push(inputValue);
    } else if (pcValue !== inputValue) {
      cows.push(inputValue);
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = { calculating };
