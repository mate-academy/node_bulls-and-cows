'use strict';

function generateRandomNumber() {
  const res = [];

  while (res.length < 4) {
    const randomDigit = Math.round(Math.random() * 9);

    if (!res.includes(randomDigit) && randomDigit !== 0) {
      res.push(randomDigit);
    }
  }

  return +res.join('');
}

module.exports = {
  generateRandomNumber,
};
