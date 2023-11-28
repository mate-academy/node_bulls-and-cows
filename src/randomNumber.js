'use strict';

const randomNumber = () => [...Array(10)]
  .map((_, i) => i)
  .sort(() => 0.5 - Math.random())
  .slice(0, 4)
  .join('');

module.exports = randomNumber;
