'use strict';

const getRandomNum = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

module.exports = { getRandomNum };
