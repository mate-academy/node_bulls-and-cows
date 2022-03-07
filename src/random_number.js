'use strict';

exports.randomNumber = () => {
  const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const index = Math.floor(Math.random() * 10);
    const first = arrayOfNumbers[i];
    const second = arrayOfNumbers[index];

    arrayOfNumbers[i] = second;
    arrayOfNumbers[index] = first;
  };

  return arrayOfNumbers.join('').slice(0, 4);
};
