'use strict';

const randomNum = () => parseInt([...Array(4)]
  .map(() => Math
    .floor(Math.random() * 10)).join(''), 10);

module.exports = randomNum;
