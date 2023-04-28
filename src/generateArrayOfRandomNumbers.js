'use strict';

const generateArrayOfNumbers = () => {
  const numbers = [];

  const generateNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  while (numbers.length < 4) {
    const generatedNumber = generateNumber();

    if (!numbers.includes(String(generatedNumber))) {
      numbers.push(String(generatedNumber));
    }
  }

  return numbers;
};

module.exports = { generateArrayOfNumbers };
