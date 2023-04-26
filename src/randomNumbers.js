'use strict';

module.exports = function generationRandomDigits() {
  const randomNumber1 = Math.floor(Math.floor(Math.random() * 10));
  const randomNumber2 = Math.floor(Math.floor(Math.random() * 10));
  const randomNumber3 = Math.floor(Math.floor(Math.random() * 10));
  const randomNumber4 = Math.floor(Math.floor(Math.random() * 10));

  return `${randomNumber1}${randomNumber2}${randomNumber3}${randomNumber4}`;
};
