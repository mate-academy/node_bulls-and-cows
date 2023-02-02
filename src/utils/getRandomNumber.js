'use strict';

function getRandomNumber() {
  const arr = [];

  while (arr.length !== 4) {
    const currentNumber = Math.floor(Math.random() * 9);

    if (arr.find(x => x === currentNumber)) {
      continue;
    }

    if (arr.length === 0 && currentNumber === 0) {
      continue;
    }

    arr.push(currentNumber);
  }

  return arr.join('');
}

module.exports = {
  getRandomNumber,
};
