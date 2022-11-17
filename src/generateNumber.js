'use strict';

const generateNumber = () => {
  const randoms = [];

  while (randoms.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!randoms.includes(randomDigit)) {
      randoms.push(randomDigit);
    }
  }

  return randoms.join('');
};

module.exports = { generateNumber };
