'use strict';

let number = '';

while (number.length < 4) {
  const digit = Math.floor(Math.random() * 10);

  if (number.indexOf(digit.toString()) === -1) {
    number += digit;
  };
}

module.exports = {
  number,
};
