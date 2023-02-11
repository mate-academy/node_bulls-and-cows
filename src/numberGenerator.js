'use strict';

const randomizer = require('./randomizer').randomizer;

const numberGenerator = () => {
  const uniqueNumbers = [];

  for (let i = 0; i < 4; i++) {
    let randomNumber = randomizer();

    while (uniqueNumbers.includes(randomNumber)) {
      randomNumber = randomizer();
    }

    uniqueNumbers.push(randomNumber);
  }

  return uniqueNumbers.join('');
};

exports.numberGenerator = numberGenerator;
