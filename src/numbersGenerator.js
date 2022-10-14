'use strict';

function getRandomIntInclusive(a, b) {
  const min = Math.ceil(a);
  const max = Math.floor(b);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const numberGenerator = () => {
  let randomDigits = '';

  do {
    const randomDigit = getRandomIntInclusive(0, 9);

    if (!randomDigits.includes(randomDigit)) {
      randomDigits += randomDigit;
    }
  } while (randomDigits.length < 4);

  return randomDigits;
};

const randomNumber = numberGenerator();

module.exports = { randomNumber };
