'use strict';

const generating = () => {
  const randomDigits = [
    Math.floor(Math.random() * 3) + 3,
    Math.floor(Math.random() * 2) + 6,
    Math.floor(Math.random() * 2) + 8,
    Math.floor(Math.random() * 3),
  ];

  randomDigits.sort(() => Math.random() - 0.5);

  return randomDigits.join('');
};

module.exports = { generating };
