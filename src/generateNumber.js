'use strict';

function generateNumber() {
  const generatedDigits = [];

  const min = 0;
  const max = 9;

  while (generatedDigits.length !== 4) {
    const generatedDigit = Math.floor(Math.random() * (max - min + 1)) + min;

    if (generatedDigits[0] === undefined && generatedDigit === 0) {
      continue;
    }

    if (!generatedDigits.includes(generatedDigit)) {
      generatedDigits.push(generatedDigit);
    }
  }

  return generatedDigits.join('');
}

module.exports.generateNumber = generateNumber;
