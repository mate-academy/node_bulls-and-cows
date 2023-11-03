'use strict';

function randomize() {
  const arr = [];

  while (arr.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10).toString();

    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }

  return arr;
}

module.exports = { randomize };
