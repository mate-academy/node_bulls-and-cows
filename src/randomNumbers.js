'use strict';

module.exports = function generationRandomDigits() {
  let result = '';

  for (let i = 0; i < 4; i++) {
    result += `${Math.floor(Math.floor(Math.random() * 10))}`;
  }

  return result;
};
