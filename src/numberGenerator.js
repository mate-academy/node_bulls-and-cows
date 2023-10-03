'use strict';

function numberGenerator() {
  const arrayOfRandomNumbers = [];

  while (arrayOfRandomNumbers.length < 4) {
    const random = Math.floor(0 + Math.random() * (9 + 1 - 0)).toString();

    if (arrayOfRandomNumbers.includes(random)) {
      continue;
    }

    arrayOfRandomNumbers.push(random);
  }

  return arrayOfRandomNumbers.join('');
}

module.exports = { numberGenerator };
