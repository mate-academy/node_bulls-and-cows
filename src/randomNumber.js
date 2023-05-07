'use strict';

function generateNumber() {
  let number = '';
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    number += digits.splice(randomIndex, 1);
  }

  return number + '';
}

module.exports.generateNumber = generateNumber();
