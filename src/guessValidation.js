'use strict';

const isValidGuess = (guess) => {
  const arr = guess.split('');

  const filtered = arr.filter((value, i) => arr.indexOf(value) === i);

  return arr.length === filtered.length;
};

module.exports = { isValidGuess };
