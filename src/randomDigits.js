'use strict';

const getRandomNumber = () => {
  const result = [];
  const kitDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 4; i++) {
    const indexDidit = Math.floor(Math.random() * kitDigits.length);

    result.push(kitDigits.splice(indexDidit, 1));
  }

  return result;
};

module.exports = {
  getRandomNumber,
};
