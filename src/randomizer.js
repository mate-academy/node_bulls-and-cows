'use strict';

function getRandomFourDigitNumber() {
  const fourDigit = [];

  while (fourDigit.length !== 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!fourDigit.includes(randomDigit)) {
      fourDigit.push(randomDigit);
    }
  }

  return fourDigit.join('');
}

module.exports = {
  getRandomFourDigitNumber,
};
