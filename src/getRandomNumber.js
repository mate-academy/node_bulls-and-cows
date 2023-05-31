'use strict';

function getRandomNumber() {
  const stackOfNumbers = [];

  while (stackOfNumbers.length <= 4) {
    const num = Math.floor(Math.random() * 10);

    if (!stackOfNumbers.includes(num)) {
      stackOfNumbers.push(num);
    }
  }

  return stackOfNumbers.join('');
}

module.exports = { getRandomNumber };
