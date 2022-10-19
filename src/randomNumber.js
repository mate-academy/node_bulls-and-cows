/* eslint-disable no-console */
'use strict';

function randomNumber() {
  let number = '';

  for (let i = 0; i < 4; i++) {
    let random = Math.ceil(Math.random() * 9);

    while (number.includes(random)) {
      random = Math.ceil(Math.random() * 9);
    }

    number += random;
  }

  return number;
}

randomNumber();

module.exports = {
  randomNumber,
};
