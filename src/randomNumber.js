'use strict';

function randomNum() {
  const digits = Array.from({ length: 10 }, (_, i) => i);
  let result = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result += digits.splice(randomIndex, 1)[0];
  }

  return parseInt(result, 10);
};

module.exports = randomNum;
