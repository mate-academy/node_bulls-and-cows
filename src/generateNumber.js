'use strict';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numsToGuess = '';

for (let i = 0; i < 4; i++) {
  const randIndex = Math.floor(Math.random() * numbers.length);

  numsToGuess += numbers.splice(randIndex, 1);
}

module.exports = { numsToGuess };
