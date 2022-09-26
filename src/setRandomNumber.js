'use strict';

let number = Math.round(Math.random() * 10);

let randomNumber = '';

while (randomNumber.length < 4) {
  if (!randomNumber.includes(number)) {
    randomNumber += number;
  } else {
    number = Math.round(Math.random() * 10);
  }
}

module.exports = { randomNumber };
