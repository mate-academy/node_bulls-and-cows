'use strict';

function randomNumber() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let random = '';

  for (let i = 0; i < 4; i++) {
    random += numbers.splice(Math.random() * (numbers.length - 0), 1)[0];
  }

  return random;
}

module.exports = { randomNumber };
