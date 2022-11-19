'use strict';

exports.generateNumber = () => {
  let number = '';

  while (number.length < 4) {
    const generate = Math.floor(Math.random() * 10);

    if (!number.includes(generate)) {
      number += generate;
    }
  }

  return number;
};
