'use strict';

function getRandomNumbers() {
  let randomNumbers = '';

  while (randomNumbers.length < 4) {
    randomNumbers += Math.floor(Math.random() * 10);
  }

  return randomNumbers;
}

module.exports.getRandomNumbers = getRandomNumbers;
