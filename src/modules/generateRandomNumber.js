'use strict';

function generateRandomNumber() {
  const generatedNums = [];
  const numbers = new Set();

  for (let i = 0; i < 10; i++) {
    numbers.add(i);
  }

  while (generatedNums.length < 4) {
    const randomIndex = Math.floor(Math.random() * numbers.size);
    const randomNum = [...numbers][randomIndex];

    if (generatedNums.length === 0 && randomNum === 0) {
      continue;
    }

    generatedNums.push(randomNum);
    numbers.delete(randomNum);
  }

  return Number(generatedNums.join(''));
}

module.exports = {
  generateRandomNumber,
};
