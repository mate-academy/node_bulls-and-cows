'use strict';

const generate4Digits = () => {
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.random().toString().slice(2, 3);

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return digits.join('');
};

module.exports.generate4Digits = generate4Digits;
