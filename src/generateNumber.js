'use strict';

function getRandomIntInclusive(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

function randomNumber() {
  let numbers = '';

  while (numbers.length < 4) {
    const numberRange = getRandomIntInclusive(0, 9);

    if (!numbers.includes(numberRange)) {
      numbers = numbers + numberRange;
    }
  }

  return numbers;
};

const uniqueNumber = randomNumber();

module.exports = {
  uniqueNumber,
};
