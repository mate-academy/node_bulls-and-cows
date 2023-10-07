'use strict';

const getRundomDigit = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';

  do {
    const currentNumber
      = numbers[Math.floor(Math.random() * (numbers.length - 1) + 0)];

    result += String(currentNumber);
    numbers.splice(numbers.indexOf(currentNumber), 1);
  } while (result.length < 4);

  return result;
};

module.exports = {
  getRundomDigit,
};
