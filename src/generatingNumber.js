'use strict';

const NUMBER_OF_SELECTED_DIGITS = 4;
const NUMBER_OF_POTENTIAL_DIGITS = 10;

const generateDifferentDigits = () => {
  const possibleDigits = Array.from(
    Array(NUMBER_OF_POTENTIAL_DIGITS), (_, i) => i.toString()
  );
  const generatedDigits = [];

  while (generatedDigits.length !== NUMBER_OF_SELECTED_DIGITS) {
    const randomIndex = Math.floor(Math.random() * possibleDigits.length);

    generatedDigits.push(possibleDigits[randomIndex]);
    possibleDigits.splice(randomIndex, 1);
  }

  return generatedDigits;
};

module.exports = {
  generateDifferentDigits,
};
