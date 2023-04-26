'use strict';

function generateNumber() {
  let generatedNumber = '';

  while (generatedNumber.length < 4) {
    const randomDigit = (Math.random() * 10).toString().slice(0, 1);

    if (!generatedNumber.includes(randomDigit)) {
      generatedNumber += randomDigit;
    }
  }

  return generatedNumber;
}

module.exports = { generateNumber };
