'use strict';

function getRandomNumber() {
  const stackOfNumbers = [];

  for (let i = 0; i < 4; i++) {
    const num = Math.floor(Math.random() * 10);

    stackOfNumbers.push(num);
  }

  return stackOfNumbers.join('');
}

module.exports = { getRandomNumber };
