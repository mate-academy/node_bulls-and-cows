'use strict';

const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 10000);
};

module.exports = { generateRandomNumber };
