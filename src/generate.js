'use strict';

exports.generateNum = () => {
  let number = '';

  while (number.length < 4) {
    const num = Math.round(Math.random() * 10);

    if (!number.includes(num + '')) {
      number += num;
    };
  }

  return number;
};
