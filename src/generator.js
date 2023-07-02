'use strict';

const generator = () => {
  const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  return String(randomNumber);
};

module.exports.generator = generator;
