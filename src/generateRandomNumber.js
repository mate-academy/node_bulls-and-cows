'use strict';

const { NUMBER_LENGTH } = require('./constants');

function generateRandomNumber() {
  const numberToGuess = [];

  while (numberToGuess.length !== NUMBER_LENGTH) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numberToGuess.includes(randomNumber)) {
      numberToGuess.push(randomNumber);
    }
  }

  return numberToGuess;
}

module.exports = { generateRandomNumber };
