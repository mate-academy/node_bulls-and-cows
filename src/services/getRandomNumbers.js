'use strict';

function getRandomNumbers(min, max) {
  const randomNumbers = new Set();

  while (randomNumbers.size < 4) {
    randomNumbers.add(Math.floor(Math.random() * ((max - min) + 1) + min));
  }

  return [...randomNumbers];
}

module.exports.getRandomNumbers = getRandomNumbers;
