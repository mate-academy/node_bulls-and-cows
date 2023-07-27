'use strict';

const getRandomNumber = () => {
  const digits = Array.from({ length: 10 }, (_, idx) => idx);

  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    const randomIdx = Math.floor(Math.random() * digits.length);

    randomNumber += digits[randomIdx];

    digits.splice(randomIdx, 1);
  }

  return randomNumber;
};

module.exports = { getRandomNumber };
