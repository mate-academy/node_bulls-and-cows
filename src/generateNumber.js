'use strict';

function generateNumber() {
  const digits = [];

  while (digits.length !== 4) {
    const randomNum = Math.floor(Math.random() * 10);

    if (!digits.includes(randomNum)) {
      digits.push(randomNum);
    }
  }

  return digits.join('');
}

module.exports.generateNumber = generateNumber;
