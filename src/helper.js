'use strict';

const getRandomDigit = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomDigits = (length) => {
  const result = [];
  let newValue = getRandomDigit(0, 9);

  while (result.length < length) {
    if (!result.includes(newValue)) {
      result.push(newValue);
    }
    newValue = getRandomDigit(0, 9);
  }

  return result;
};

module.exports = { getRandomDigits };
