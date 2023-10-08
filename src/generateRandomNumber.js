'use strict';

const numberToGuess = [];

while (numberToGuess.length !== 4) {
  const randomNumber = Math.floor(Math.random() * 10);

  if (numberToGuess.indexOf(randomNumber) === -1) {
    numberToGuess.push(randomNumber);
  }
}

module.exports = { numberToGuess };
