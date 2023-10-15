'use strict';

function random(min = 1000, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = random().toString();

// eslint-disable-next-line no-console
console.log(`Random Number: ${randomNumber}`);

module.exports = { randomNumber };
