'use strict';

function generateRandomNumber() {
  const randomNums = [];

  for (let i = 0; i < 4; i++) {
    const randFirst = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    const randOther = Math.floor(Math.random() * 9);

    if (randomNums.length === 0) {
      randomNums.push(randFirst);
    } else if (randomNums.includes(randFirst)
    || randomNums.includes(randOther)) {
      i--;
      continue;
    } else {
      randomNums.push(randOther);
    }
  }

  return +randomNums.join('');
}

module.exports = {
  generateRandomNumber,
};
