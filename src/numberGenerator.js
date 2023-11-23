'use strict';

function generateRandomNumbers() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const generetadNumbers = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    generetadNumbers.push(digits.splice(randomIndex, 1)[0]);
  }

  return generetadNumbers.join('');
}

module.exports = {
  generateRandomNumbers,
};
