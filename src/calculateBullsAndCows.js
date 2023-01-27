'use strict';

function compareNumbers(random, input) {
  const count = {
    bulls: 0,
    cows: 0,
  };

  const digitsRandom = `${random}`.split('');
  const digitsInput = `${input}`.split('');

  for (let i = 0; i < digitsRandom.length; i++) {
    if (digitsInput[i] === digitsRandom[i]) {
      count.bulls++;
      continue;
    }

    if (digitsRandom.includes(digitsInput[i])) {
      count.cows++;
    }
  }

  return count;
}

module.exports.compareNumbers = compareNumbers;
