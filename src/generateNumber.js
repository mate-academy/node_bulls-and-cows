'use strict';

function generateNumber() {
  const arrayOfNumbers = [];

  while (arrayOfNumbers.length < 4) {
    const number = Math.floor(Math.random() * (9 + 1));

    if (arrayOfNumbers.indexOf(`${number}`) === -1) {
      if (arrayOfNumbers.length === 0 && number === 0) {
        arrayOfNumbers.push('1');
      } else {
        arrayOfNumbers.push(`${number}`);
      }
    }
  }

  return Number(arrayOfNumbers.join(''));
}

module.exports = { generateNumber };
