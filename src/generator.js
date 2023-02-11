'use strict';

const generateRandomNumber = () => {
  const random = Math.random() * 10;
  const rounded = Math.ceil(random);

  return rounded;
};

const createRandomArray = () => {
  const array = [];

  for (let i = 0; i < 4; i++) {
    array.push(generateRandomNumber());
  }

  return array;
};

module.exports = {
  createRandomArray,
};
