'use strict';

function getRandomNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNumbers = '';

  while (randomNumbers.length < 4) {
    const randomIndex = Math.floor(Math.random() * numbers.length);

    randomNumbers += numbers[randomIndex];

    numbers.splice(randomIndex, 1);
  }

  return [...randomNumbers];
}

module.exports.getRandomNumbers = getRandomNumbers;
