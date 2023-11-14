'use strict';

const randomNumberGenerator = (digitsLength) => {
  const uniqueNumbers = [];

  while (uniqueNumbers.length < digitsLength) {
    const number = Math.floor(Math.random() * 10);

    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers.map(String);
};

module.exports = {
  randomNumberGenerator,
};
