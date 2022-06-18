'use strict';

exports.randomizer = () => {
  const randomNumbers = [];

  for (let i = 0; randomNumbers.length < 4; i++) {
    const number = Math.floor(Math.random() * 9);

    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    };
  }

  return randomNumbers;
};
