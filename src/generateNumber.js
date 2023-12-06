'use strict';

function generateNumber() {
  const numArr = [];

  for (let i = 0; i < 4; i++) {
    const randomInt = Math.floor(Math.random() * 10);

    numArr.push(randomInt);
  }

  return numArr.join('');
}

module.exports = {
  generateNumber,
};
