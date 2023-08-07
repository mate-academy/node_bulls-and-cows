'use strict';

const isValidGuess = (guess) => {
  const arr = guess.split('');

  const filtered = arr.filter((val, i) => arr.indexOf(val) === i);

  return arr.length === filtered.length;
};

module.exports = { isValidGuess };
