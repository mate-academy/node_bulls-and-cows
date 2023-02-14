'use strict';

const createNumber = (gameNumberLength) => {
  let randomlyNumber = '';

  const myNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (randomlyNumber.length < gameNumberLength) {
    const randomIndex = (Math.floor(Math.random() * myNum.length));

    randomlyNumber += myNum[randomIndex];

    myNum.splice(randomIndex, 1);
  };

  return randomlyNumber;
};

module.exports = {
  createNumber,
};
