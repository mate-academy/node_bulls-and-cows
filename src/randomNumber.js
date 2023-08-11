'use strict';

const randomNumber = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let random = '';

  while (random.length < 4) {
    const index = Math.floor(Math.random() * digits.length);
    const digit = digits.splice(index, 1)[0];

    random += digit;
  }

  return random;
};

module.exports.randomNumber = randomNumber;
