/* eslint-disable no-console */
'use strict';

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let number = getRandom(0, 9);
let randomNumber = `${getRandom(1, 9)}`;

while (randomNumber.length < 4) {
  if (!randomNumber.includes(number)) {
    randomNumber += number;
  } else {
    number = getRandom(0, 9);
  }
}

module.exports = { randomNumber };
