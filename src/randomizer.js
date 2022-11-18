'use strict';

const randomizer = () => {
  const randomNumbers = [];

  for (let i = 0; randomNumbers.length < 4; i++) {
    const number = Math.floor(Math.random() * 10);

    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    };
  }

  return randomNumbers;
};

module.exports = {
  randomizer,
};
