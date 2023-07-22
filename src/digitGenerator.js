'use strict';

const digitGenerator = function(amount) {
  if (amount > 10 || amount < 1) {
    throw new Error('Wrong amount of unique digits!');
  }

  const randomNumbers = [];

  while (randomNumbers.length < amount) {
    const digit = Math.floor(Math.random() * 10);

    if (!randomNumbers.includes(digit)) {
      randomNumbers.push(digit);
    }
  }

  return randomNumbers;
};

module.exports = {
  digitGenerator,
};
