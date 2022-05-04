'use strict';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = numbers.length - 1; i > 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));

  [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
}

const randomNumbers = numbers.slice(0, 4);

module.exports = {
  randomNumbers,
};
