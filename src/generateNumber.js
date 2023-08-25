'use strict';

const NUM_LENGTH = 4;

module.exports.generateNumber = () => {
  const digitsArray = [];

  const randomNumExceptZero = Math.floor(Math.random() * 9 + 1);

  digitsArray.push(randomNumExceptZero);

  while (digitsArray.length < NUM_LENGTH) {
    const numToPush = Math.floor(Math.random() * 10);

    if (!digitsArray.includes(numToPush)) {
      digitsArray.push(numToPush);
    }
  }

  return digitsArray.join('');
};
