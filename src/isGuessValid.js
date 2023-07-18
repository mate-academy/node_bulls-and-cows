'use strict';

function isGuessValid(guess) {
  return /^\d{4}$/.test(guess);
}

module.exports = {
  isGuessValid,
};
