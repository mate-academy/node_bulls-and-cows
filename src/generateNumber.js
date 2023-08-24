'use strict';

const NUM_LENGTH = 4;

module.exports.generateNumber = () => {
  const digitsArray = [];

  while (digitsArray.length < NUM_LENGTH) {
    const numToPush = Math.floor(Math.random() * 10);

    if (!digitsArray.includes(numToPush)) {
      digitsArray.push(numToPush);
    }
  }

  return digitsArray.join('');
};
