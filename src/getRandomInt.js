'use strict';

function getRandomInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min) + min);
}

let programNumber = '';

while (programNumber.length < 4) {
  const digit = getRandomInt();

  if (!programNumber.includes(digit)) {
    programNumber += digit;
  }
}
module.exports = { programNumber };
