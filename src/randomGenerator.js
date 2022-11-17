'use strict';

const generateRandomNumber = () => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000).toString();

  if (new Set(randomNumber.split('')).size < 4) {
    return generateRandomNumber();
  }

  return randomNumber;
};

module.exports = { generateRandomNumber };
