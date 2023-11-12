'use strict';

const randomNumberGenerator = () => {
  const uniqueNumbers = [];

  while (uniqueNumbers.length < 4) {
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
