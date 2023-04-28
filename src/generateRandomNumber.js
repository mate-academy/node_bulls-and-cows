'use strict';

const dotenv = require('dotenv');

dotenv.config();

const { MAX_NUMBER } = process.env;

const getRandomNumber = () => {
  const digits = [];

  while (digits.length < 4) {
    const randomNumber = Math.ceil(Math.random() * MAX_NUMBER);

    if (!digits.includes(randomNumber)) {
      digits.push(randomNumber);
    }
  }

  return digits.join('');
};

module.exports = { getRandomNumber };
