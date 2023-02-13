'use strict';

exports.generateNumber = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';

  Array(4).fill().forEach(() => {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result += digits[randomIndex];
    digits.splice(randomIndex, 1);
  });

  return result;
};
