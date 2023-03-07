'use strict';

const randomDigitsGenerator = () => {
  let count = 4;
  const result = [];

  while (count > 0) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!result.includes(randomDigit)) {
      result.push(randomDigit);
      count--;
    }
  }

  return result;
};

exports.randomDigitsGenerator = randomDigitsGenerator;
